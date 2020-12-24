import prettier from 'prettier';
import {existsSync, mkdirSync} from 'fs';
import {writeFile2} from './dirUtils.js';
import {dirname} from 'path';
import NestedRawJson from './NestedRawJson.js';
import byTypes from '../config/byTypes.js';
import {default as config} from './loadFile.config.js';

/**
 * Сохранить в файл
 * @param  {Object} json  Объект, который нужно сохранить
 * @param  {String} type  Тип сохраняемого файла (прим. 'json', 'yaml' и т.д)
 * @return {Promise<void>|Error}
 */
export default function saveFile(json, type = 'js') {
  const addData = addContent(json);
  const pluginName = (json.metadata.pluginName)? `+ ${json.metadata.pluginName}.js plugin` : '';
  const file = json.metadata.saveAs.replace(/\.(.+)$/m, '.' + type);
  delete json.metadata;

  if (!Object.keys(config).includes(type)) {
    throw new Error(`Неправильный или не поддерживаемый тип для сохранения файлов: "${type}"`);
  }
  if (!existsSync(dirname(file))) {
    mkdirSync(dirname(file));
  }
  return writeFile2(file,
      prettier.format(
          config[type].formatting(json, pluginName, addData),
          config[type].opts,
      ),
  )
      .then(() => {
        console.log('Файл', `"\x1b[32m${file}\x1b[0m"`, 'создан');
      })
      .catch((err) => {
        throw err;
      });

  // добавить захардкоженый контент
  function addContent(json) {
    const needData = /(\w+)\..+?/.exec(json.metadata.originalFile)[1];
    const byType = byTypes[needData] || {};
    const result = {
      content: null,
      export: null
    };
    let registered = [];

    result.export = 'data';
    if (json[Object.keys(json)[0]].constructor !== NestedRawJson) {
      return result; // нет вложенных объектов - просто данные
    }
    Object.keys(byType)
        .forEach((key) => registered = registered.concat(byType[key]));
    const notRegistered = Object.keys(json)
        .filter((key) => !registered.includes(key));
    if (notRegistered.length !== 0) {
      if (Object.keys(byType).length !== 0) {
        byType.notregistered = notRegistered;
      } else {
        byType.default = notRegistered;
      }
    }
    result.content = `let byTypes= ${JSON.stringify(byType, null, 2)}`;
    result.export += ', byTypes';
    return result;
  }
}
