// noinspection SpellCheckingInspection

export default {
    meta: [
        'TID',
        'TID_Description',
        'Icon',
        'Name',
        'Model',
    ],
    forceTitle: [
        'modules',
        'GhostSpawnSecs',
        'DestinyDisableTimes',
        'BarrageMaxAdditionalEnemies',
    ],
    global: [
        'NumMoons',
        'Hide',
        'InitialBlueprints',
        'DoNotAward',
        'ShipAIHandler',
        'RequiredPlanetLevel',
        'CanBeBuilt',
        'ScaleEffectsWithZoom',
        'TID_UPGRADE',
        'HideSelection',
        'ActivationType',
        'MoonDistance',
        'MoonSize',
        'MinPlanetDistanceFromCenter',
        'MaxPlanetDistanceFromCenter',
        'AsteroidBeltAxis1Size',
        'AsteroidBeltAxis2Size',
        'TutorialUse',
        'Weight',
        'CrystalsWeight',
        'PlanetSize',
        'ModelFolders',
        'ColorR',
        'ColorG',
        'ColorB',
        'HexGridSizeX',
        'HexGridSizeY',
        'HexGridMaxRadius',
        'HexCellEdgeSize',
        'FixedSector',
        'TID_CUSTOM_TUT_SELECT',
        'CUnitShipmentScaleY',
        'CUnitShipmentSpacingY',
        'CShipmentSizeMin',
        'CShipmentSizeMax',
        'HideModulesOnHUD',
        'RushCostModifier',
        'GoalRushCostMultiplier',
        'SlotType',
        'WeaponEffectType',
        'WeaponFx',
        'ClientActivationFx',
        'ImpactFX',
        'DestroyedFX',
        'LaunchFX',
        'IsDestiny',
        'TID_INFO_SCREEN',
        'ModelScale',
        'IsCombatShip',
        'IsDrone',
        'IsTurret',
        'AwardLevel',
        'ActivateFX',
        'ActivateFXStaysInPlace',
        'SustainedFX',
        'SpawnFx',
        'SustainedFX_Enemy',
        'BuildNotifMode',
        'ShowInStarLinks',
        'PrefabModel',
        'PrefabModel_BuildMenu',
        'StargateModel',
        'SupernovaFX',
        'SupernovaFXSpawnTimeSec',
        'GroupId',
        'GoalType',
        'GoogleID',
        'ModuleReq',
        'UnlockType',
        'SpawnedShip',
        'GroupName',
        'GroupPriority',
        'ShowOnPlayerBadge',
    ],
    byPath: [

        // SpaceBuildings
        'Shipyard.MaxPerSector',
        'BlueStarScanner.StarScannerType',
        'WarpLaneHub.IsWarpLane',
        'WarpLaneHub.OverrideMinAsteroidDistSquared',
        'ShortRangeScanner.CanScanSectors',

        // Cerberus
        'Ghosts.RadiusMin',
        // 'Ghosts.RadiusMax', // - в строчках есть перевод, а так хз зачем это
        'Ghosts.ModelToSpawn',
        'BomberRocket.AdditionalWaypoint',
        'DartBarrage.AdditionalWaypoint',
        'GuardianBattery.ShowWSInfo',
        'GuardianBattery.UnlockPrice',
        'GuardianBattery.UnlockBlueprints',
        'GuardianBattery.UnlockTime',
        'GuardianBattery.WhiteStarScore',
        'GuardianBattery.Install',
        'GuardianBattery.BCCost',
        'GuardianBattery.FuelUseIncrease',
        'InterceptorMBattery.ShowWSInfo',
        'InterceptorMBattery.UnlockPrice',
        'InterceptorMBattery.UnlockBlueprints',
        'InterceptorMBattery.UnlockTime',
        'InterceptorMBattery.WhiteStarScore',
        'InterceptorMBattery.Install',
        'InterceptorMBattery.BCCost',
        'InterceptorMBattery.FuelUseIncrease',
        'ColossusLaser.ShowWSInfo',
        'ColossusLaser.UnlockPrice',
        'ColossusLaser.UnlockBlueprints',
        'ColossusLaser.UnlockTime',
        'ColossusLaser.WhiteStarScore',
        'ColossusLaser.Install',
        'ColossusLaser.BCCost',
        'ColossusLaser.FuelUseIncrease',
        'DestroyerVengeance.ShowWSInfo',
        'DestroyerVengeance.UnlockPrice',
        'DestroyerVengeance.UnlockBlueprints',
        'DestroyerVengeance.UnlockTime',
        'DestroyerVengeance.WhiteStarScore',
        'DestroyerVengeance.Install',
        'DestroyerVengeance.BCCost',
        'DestroyerVengeance.FuelUseIncrease',
        'BomberLauncher.ShowWSInfo',
        'BomberLauncher.UnlockPrice',
        'BomberLauncher.UnlockBlueprints',
        'BomberLauncher.UnlockTime',
        'BomberLauncher.WhiteStarScore',
        'BomberLauncher.Install',
        'BomberLauncher.BCCost',
        'BomberLauncher.FuelUseIncrease',
        'PhoenixShield.ShowWSInfo',
        'PhoenixShield.UnlockPrice',
        'PhoenixShield.UnlockBlueprints',
        'PhoenixShield.UnlockTime',
        'PhoenixShield.WhiteStarScore',
        'PhoenixShield.Install',
        'PhoenixShield.BCCost',
        'PhoenixShield.FuelUseIncrease',
        'DartBarrage.ShowWSInfo',
        'DartBarrage.UnlockPrice',
        'DartBarrage.UnlockBlueprints',
        'DartBarrage.UnlockTime',
        'DartBarrage.WhiteStarScore',
        'DartBarrage.Install',
        'DartBarrage.BCCost',
        'DartBarrage.FuelUseIncrease',
        'CerberusSentinel.NewModuleSlots',
        'CerberusSentinel.BuildCost',
        'CerberusSentinel.HideModulesOnHUD',
        'CerberusSentinel.BSPenaltyPerSec',
        'CerberusSentinel.DesignUpgradeCost',
        'CerberusSentinel.DesignUpgradeTime',
        'CerberusSentinel.ShipAIHandler',
        'CerberusSentinel.AggressiveAI',
        'CerberusSentinel.OnDestroySpawn',
        'CerberusSentinel.BSPenaltyPerSecOnSector',
        'CerberusGuardian.NewModuleSlots',
        'CerberusGuardian.BuildCost',
        'CerberusGuardian.HideModulesOnHUD',
        'CerberusGuardian.BSPenaltyPerSec',
        'CerberusGuardian.DesignUpgradeCost',
        'CerberusGuardian.DesignUpgradeTime',
        'CerberusGuardian.ShipAIHandler',
        'CerberusGuardian.AggressiveAI',
        'CerberusGuardian.OnDestroySpawn',
        'CerberusGuardian.BSPenaltyPerSecOnSector',
        'CerberusInterceptor.NewModuleSlots',
        'CerberusInterceptor.BuildCost',
        'CerberusInterceptor.HideModulesOnHUD',
        'CerberusInterceptor.BSPenaltyPerSec',
        'CerberusInterceptor.DesignUpgradeCost',
        'CerberusInterceptor.DesignUpgradeTime',
        'CerberusInterceptor.ShipAIHandler',
        'CerberusInterceptor.AggressiveAI',
        'CerberusInterceptor.OnDestroySpawn',
        'CerberusInterceptor.BSPenaltyPerSecOnSector',
        'CerberusColossus.NewModuleSlots',
        'CerberusColossus.BuildCost',
        'CerberusColossus.HideModulesOnHUD',
        'CerberusColossus.BSPenaltyPerSec',
        'CerberusColossus.DesignUpgradeCost',
        'CerberusColossus.DesignUpgradeTime',
        'CerberusColossus.ShipAIHandler',
        'CerberusColossus.AggressiveAI',
        'CerberusColossus.OnDestroySpawn',
        'CerberusColossus.BSPenaltyPerSecOnSector',
        'CerberusDestroyer.NewModuleSlots',
        'CerberusDestroyer.BuildCost',
        'CerberusDestroyer.HideModulesOnHUD',
        'CerberusDestroyer.BSPenaltyPerSec',
        'CerberusDestroyer.DesignUpgradeCost',
        'CerberusDestroyer.DesignUpgradeTime',
        'CerberusDestroyer.ShipAIHandler',
        'CerberusDestroyer.AggressiveAI',
        'CerberusDestroyer.OnDestroySpawn',
        'CerberusDestroyer.BSPenaltyPerSecOnSector',
        'CerberusBomber.NewModuleSlots',
        'CerberusBomber.BuildCost',
        'CerberusBomber.HideModulesOnHUD',
        'CerberusBomber.BSPenaltyPerSec',
        'CerberusBomber.DesignUpgradeCost',
        'CerberusBomber.DesignUpgradeTime',
        'CerberusBomber.ShipAIHandler',
        'CerberusBomber.AggressiveAI',
        'CerberusBomber.OnDestroySpawn',
        'CerberusBomber.BSPenaltyPerSecOnSector',
        'CerberusPhoenix.NewModuleSlots',
        'CerberusPhoenix.BuildCost',
        'CerberusPhoenix.HideModulesOnHUD',
        'CerberusPhoenix.BSPenaltyPerSec',
        'CerberusPhoenix.DesignUpgradeCost',
        'CerberusPhoenix.DesignUpgradeTime',
        'CerberusPhoenix.ShipAIHandler',
        'CerberusPhoenix.AIUpdateIntervalSeconds',
        'CerberusPhoenix.AggressiveAI',
        'CerberusPhoenix.OnDestroySpawn',
        'CerberusPhoenix.BSPenaltyPerSecOnSector',
        'CerberusStorm.NewModuleSlots',
        'CerberusStorm.BuildCost',
        'CerberusStorm.HideModulesOnHUD',
        'CerberusStorm.BSPenaltyPerSec',
        'CerberusStorm.DesignUpgradeCost',
        'CerberusStorm.DesignUpgradeTime',
        'CerberusStorm.ShipAIHandler',
        'CerberusStorm.AggressiveAI',
        'CerberusStorm.OnDestroySpawn',
        'CerberusStorm.BSPenaltyPerSecOnSector',
        'CerberusGhosts.NewModuleSlots',
        'CerberusGhosts.BuildCost',
        'CerberusGhosts.HideModulesOnHUD',
        'CerberusGhosts.BSPenaltyPerSec',
        'CerberusGhosts.DesignUpgradeCost',
        'CerberusGhosts.DesignUpgradeTime',
        'CerberusGhosts.OnDestroySpawn',
        'CerberusGhosts.BSPenaltyPerSecOnSector',
        'CerberusHydra.NewModuleSlots',
        'CerberusHydra.BuildCost',
        'CerberusHydra.HideModulesOnHUD',
        'CerberusHydra.BSPenaltyPerSec',
        'CerberusHydra.DesignUpgradeCost',
        'CerberusHydra.DesignUpgradeTime',
        'CerberusHydra.ShipAIHandler',
        'CerberusHydra.AIUpdateIntervalSeconds',
        'CerberusHydra.AggressiveAI',
        'CerberusHydra.OnDestroySpawn',
        'CerberusHydra.BSPenaltyPerSecOnSector',
        'Hydraling1.NewModuleSlots',
        'Hydraling1.BuildCost',
        'Hydraling1.HideModulesOnHUD',
        'Hydraling1.BSPenaltyPerSec',
        'Hydraling1.DesignUpgradeCost',
        'Hydraling1.DesignUpgradeTime',
        'Hydraling1.ShipAIHandler',
        'Hydraling1.AIUpdateIntervalSeconds',
        'Hydraling1.AggressiveAI',
        'Hydraling1.OnDestroySpawn',
        'Hydraling1.BSPenaltyPerSecOnSector',
        'Hydraling2.NewModuleSlots',
        'Hydraling2.BuildCost',
        'Hydraling2.HideModulesOnHUD',
        'Hydraling2.BSPenaltyPerSec',
        'Hydraling2.DesignUpgradeCost',
        'Hydraling2.DesignUpgradeTime',
        'Hydraling2.ShipAIHandler',
        'Hydraling2.AIUpdateIntervalSeconds',
        'Hydraling2.AggressiveAI',
        'Hydraling2.OnDestroySpawn',
        'Hydraling2.BSPenaltyPerSecOnSector',
        'CerberusGuardian.ApplyModuleOnDockedObjectDestroy',
        'CerberusGuardian.OnDestroySpawnMinRadius',
        'CerberusGuardian.OnDestroySpawnMaxRadius',
        'CerberusInterceptor.ApplyModuleOnDockedObjectDestroy',
        'CerberusInterceptor.OnDestroySpawnMinRadius',
        'CerberusInterceptor.OnDestroySpawnMaxRadius',
        'CerberusDestroyer.ApplyModuleOnDockedObjectDestroy',
        'CerberusDestroyer.OnDestroySpawnMinRadius',
        'CerberusDestroyer.OnDestroySpawnMaxRadius',
        'CerberusBomber.ApplyModuleOnDockedObjectDestroy',
        'CerberusBomber.OnDestroySpawnMinRadius',
        'CerberusBomber.OnDestroySpawnMaxRadius',
        'CerberusStorm.ApplyModuleOnDockedObjectDestroy',
        'CerberusStorm.OnDestroySpawnMinRadius',
        'CerberusStorm.OnDestroySpawnMaxRadius',
        'CerberusGhosts.ApplyModuleOnDockedObjectDestroy',
        'CerberusGhosts.OnDestroySpawnMinRadius',
        'CerberusGhosts.OnDestroySpawnMaxRadius',
        'CerberusPhoenix.ApplyModuleOnDockedObjectDestroy',
        'CerberusPhoenix.OnDestroySpawnMinRadius',
        'CerberusPhoenix.OnDestroySpawnMaxRadius',
        'CerberusHydra.ApplyModuleOnDockedObjectDestroy',
        'CerberusHydra.OnDestroySpawnMinRadius',
        'CerberusHydra.OnDestroySpawnMaxRadius',
        'Hydraling1.ApplyModuleOnDockedObjectDestroy',
        'Hydraling1.OnDestroySpawnMinRadius',
        'Hydraling1.OnDestroySpawnMaxRadius',
        'Hydraling2.ApplyModuleOnDockedObjectDestroy',
        'Hydraling2.OnDestroySpawnMinRadius',
        'Hydraling2.OnDestroySpawnMaxRadius',

        // Ships
        'Battleship.BSPenaltyPerSec', // статы для ГЗ бота
        'Transport.HP',
        'Transport.MaxShipments',
        'Miner.HP',
        'Miner.FuelUsePer5000Distance',
        'Battleship.InitialModule',
        'Battleship.InitialModuleLevels',
        'Battleship.HydrogenCapacity',
        'CorpFlagship.DesignUpgradeTime',
        'CorpFlagship.BuildCost',
        'CorpFlagship.FuelUsePer5000Distance',
        'CorpFlagship.JumpFuelCosts',

        // Ships.FlagmanModules
        'Recoil.IsTeleport',
        'Recoil.IsRecoil',
        'Recoil.ActivationPrepBS',
        'Recoil.ActivationPrep',
        'Recoil.ActivationDelayBS',
        'Recoil.ActivationDelay',
        'Immolation.ActivationDelay',
        'Immolation.ActivationDelayBS',
        'EMPRocket.ActivationDelayBS',
        'EMPRocket.ActivationDelay',
        'FlagshipDartBarrage.AdditionalWaypoint',
        'FlagshipDartBarrage.ActivationDelayBS',
        'FlagshipDartBarrage.ActivationDelay',
        'FlagshipWeaponModule.ActivationDelayBS',
        'FlagshipWeaponModule.SpawnLifetimeBS',
        'FlagshipWeaponModule.ActivationDelay',
        'FlagshipWeaponModule.SpawnLifetime',
        'FlagshipAreaShield.ActivationDelayBS',
        'FlagshipAreaShield.EffectDurationx10BS',
        'FlagshipAreaShield.ActivationDelay',
        'FlagshipAreaShield.EffectDurationx10',
        'FlagshipShieldModule.SpawnLifetimeBS',
        'FlagshipShieldModule.ActivationDelayBS',
        'FlagshipShieldModule.SpawnLifetime',
        'FlagshipShieldModule.ActivationDelay',
        'Immolation.IsImmolation',

        // RedStar
        'RedStar.Star',
        'RedStar.RSPublicLateJoin_ClientCacheExpiry',
        'RedStar.MaxGateBomberCoverage',
        'RedStar.DontAllowUseOfEnemyWSGate',
        'RedStar.DisableRSSearchDuringTutorial',
        'RedStar.WarnOnSRSPlacementMinNumNeighbors',
        'RedStar.PrivateRSEventClientDisplayMode',

        // RedStar.artifacts
        'Combat.Model',
        'Utility.Model',
        'Support.Model',
        'Combat.RSLevelRequired',
        'Utility.RSLevelRequired',
        'Support.RSLevelRequired',
        'Combat.MaxModuleLevelToAward',
        'Utility.MaxModuleLevelToAward',
        'Support.MaxModuleLevelToAward',
        'Combat.GroupNames',
        'Utility.GroupNames',
        'Support.GroupNames',
        'Combat.BlueprintTypes',
        'Utility.BlueprintTypes',
        'Support.BlueprintTypes',

        // YellowStar
        'planet_levels.ShipmentsHydroValuePerDay',
        'yellow_star_sectors.AsteroidsMin',
        'yellow_star_sectors.NumBases',
        'Planets.FuelShipmentModifier',
        'YellowStar.NumPlayersWithAccess',
        'YellowStar.IsHome',
        'YellowStar.Star',
        'YellowStar.Lifetime',

        // BlueStar
        'BlueStar.Models',
        'BlueStar.Star',
        'BlueStar.CollapseReductionPerCycle',
        'BlueStar.StageStartSec',
        'BlueStar.StarSectorNavpointDistance',
        'BlueStar.MedRiskMining',
        'BlueStar.HighRiskMining',
        'BlueStar.HydrogenSearchCost',
        'BlueStar.MaxBattleshipsPerPlayer',
        'BlueStar.BlueStar_HydroPctPerMatch',
        'BlueStar.BlueStar_CRRewardWinLimit',

        // WhiteStar
        'WhiteStar.Star',
        'WhiteStar.Models',
        'WhiteStar.PlayerNumberBrackets',
        'WhiteStar.HQPlanetsPerBracket',
        'WhiteStar.LQPlanetsPerBracket',
        'WhiteStar.HighRiskMining',
        'WhiteStar.FleetDepartTimeInSeconds_WS',
        'WhiteStar.DontAllowUseOfEnemyWSGate',
        'WhiteStar.WSShipXPCollectEnabled',
        'WhiteStar.WSShipMinXP',
        'WhiteStar.WSShipXPEventClientDisplayMode',
        'WhiteStar.WSShipXPEventVersion',
        'WhiteStar.WSHQAsteroidsPerBucket',
        'WhiteStar.WSShipEventTopBrackets',
        'WhiteStar.WSShipEventCRRewards',

        // Trade
        'Recall.TeleportToTradeStation',
        'ShipmentDrone.NewModuleSlots',
        'ShipmentDrone.JobCapacity',
        'ShipmentDrone.MiningPeriod',
        'ShipmentDrone.HP',
        'RelicDrone.NewModuleSlots',
        'RelicDrone.BuildCost',
        'RelicDrone.DesignUpgradeCost',
        'RelicDrone.DesignUpgradeTime',
        'RelicDrone.MaxShipments',

        // Mining
        'HydroRocket.AdditionalWaypoint',
        'HydroRocket.InitialBlueprints',
        'MassMining.MineAllInSector',
        'Entrust.SwapLoadWithOtherTransport',
        'MineralStorageCapacity.FuelUseIncrease',
        'MassMining.FuelUseIncrease',
        'HydrogenUpload.WhiteStarScore',
        'MiningDrone.NewModuleSlots',
        'MiningDrone.JobCapacity',

        // Weapons
        'DartLauncher.AdditionalWaypoint',
        'WeakBattery.UnlockPrice',
        'WeakBattery.UnlockBlueprints',
        'WeakBattery.UnlockTime',
        'WeakBattery.ShowWSInfo',
        'WeakBattery.UnlockPrice',
        'WeakBattery.UnlockBlueprints',
        'WeakBattery.UnlockTime',
        'WeakBattery.WhiteStarScore',
        'WeakBattery.Install',
        'WeakBattery.BCCost',
        'WeakBattery.FuelUseIncrease',

        // Shields
        'BlastShield.IsAOEOnlyShield',
        'WeakShield.WhiteStarScore',

        // Support
        'EMP.IsEMP',
        'Teleport.IsTeleport',
        'Sanctuary.JumpToSafety',
        'Sanctuary.SanctuaryHydroCostPct',
        'Stealth.IsStealth',
        'Fortify.IsTaunt',
        'AlphaRocket.AdditionalWaypoint',
        'OmegaRocket.AdditionalWaypoint',
        'RemoteBomb.AdditionalWaypoint',
        'Supress.IsSupress',
        'Destiny.ReqEnemyShipsInSector',
        'Barrier.IsBarrier',
        'Leap.TeleportToClosestCombat',
        'Bond.PullShips',
        'Bond.MinPublicRSLevel',
        'Bond.BondMinPullVector',
        'Bond.BondWorksOnLoadingTransport',
        'Bond.BondMinPullVector',
        'Recall.WhiteStarScore',
        'AlphaDrone.NewModuleSlots',
        'AlphaDrone.BuildCost',
        'AlphaDrone.HideModulesOnHUD',
        'AlphaDrone.BSPenaltyPerSec',
        'AlphaDrone.DesignUpgradeCost',
        'AlphaDrone.DesignUpgradeTime',
        'AlphaDrone.ShipAIHandler',
        'AlphaDrone.AggressiveAI',
        'AlphaDrone.OnDestroySpawn',
        'AlphaDrone.BSPenaltyPerSecOnSector',
        'RemoteBomb.Speed',
        'LaserTurret_Laser.WeaponEffectType',
        'LaserTurret.NewModuleSlots',
        'LaserTurret.BuildCost',
        'LaserTurret.InitialModule',
        'LaserTurret.Speed',
        'LaserTurret.InitialModuleLevels',
        'LaserTurret.MaxPerRS',
        'DeltaRocket.PreventUseOnWsJumpgate',
    ],
};
