/**
 * Dockyard namespace
 */
namespace Dockyard {
  enum MissionState { Idle = 0, InProgress = 1, Returned = 2 }

  /**
   * Non-personal base data
   */
  export module BaseData {
    interface Ship {
      id: number;
      sortId: number;
      name: {
        kanji: string;
        reading?: string;
      };
      flavorText: string;
      remodel: Remodel;
      capacity: {
        fuel: {
          max: number;
        };
        ammo: {
          max: number;
        };
      };
      rarity: Rarity;
      gains: {
        scrap: Materials;
        remodel: RemodelGains;
      };
      stats: ShipStats;
      slots: {
        count: number;
        planeSlotCapacity: [number, number, number, number, number];
      };
      type: ShipType;
      shipExtraVoices: boolean;
    }

    interface ShipType {
      id: number;
      sortId: number;
      name: string;
      equippableTypes: number;
      $_unknown: {
        kcnt: any;
        scnt: any;
      };
    }

    interface SlotItem {
    }

    interface Remodel {
      level: number;
      remodelsToId: number;
      cost: {
        fuel: number;
        ammo: number;
      };
    }

    interface ShipStats {
      firepower: [number, number];
      torpedo: [number, number];
      endurance: [number, number];
      antiAir: [number, number];
      luck: [number, number];
      range: number;
      speed: number;
    }

    enum Rarity { 1, 2, 3, 4, 5 }
  }

  export module PlayerData {
    interface Ship {
      hp: [number, number]; // [now, max]
    }

    interface ShipType {
    }
    interface SlotItem {
    }
    interface Profile {
    }

    interface Fleet {
      id: number;
      memberId: number;
      flagship: any;
      missionState: MissionState;
      ships: Array<number>;
      $_unknown: {
        nameId: any;
      };
    }

    interface Quest {
    }
    interface Dock {
    }
    interface RepairDock extends Dock {
    }
    interface ConstructionDock extends Dock {
    }
    interface Profile {
    }
    interface Materials {
      fuel: number;
      ammo: number;
      steel: number;
      bauxite: number;
    }

    interface Mission {
      missionId: number;
      state: any;
      completionTime: number;
      fleetId: number;
      _last?: any;
    }
  }

  export interface Profile {
    id: number;
    name: string;
  }

  export interface Events extends Immutable.Map {
    [key: string]: any;
  }

  export interface ApiEventsByPath extends Immutable.Map {
    [key: string]: string;
  }

  export interface ApiRequest {
    path: string;
    status: __PROTO.Status;
    body?: any;
    postBody?: any;
  }

  export interface Materials {
    fuel: number;
    ammo: number;
    steel: number;
    bauxite: number;
    instantConstruction?: number;
    instantRepair?: number;
    developmentMaterials?: number;
    improvementMaterials?: number;
  }

  export interface RemodelGains {
    torpedo?: number;
    stat?: number;
    stat2?: number;
  }

  export interface PlayerMission {
    missionId: number;
    state: any;
    completionTime: number;
    fleetId: number;
    _last?: any;
  }
}

namespace __PROTO {
  enum Status {
    OK,
    ERROR
  }

  enum GameState {
    Idle = 0,
    InSortie = 1
  }

  export interface ApiRequest {
    path: string;
    error?: any;
    body?: any;
    postBody?: any;
  }

  /**
   * Application internal state shape
   */
  export interface AppState {
    /**
     * Core state
     */
    core: {
      gameState: GameState
    };

    /**
     * Game-related base data
     * Holds the processed (but not yet transformed?) API data.
     */
    game: {
      ships: Array<Dockyard.BaseData.Ship>
      shipTypes: Array<Dockyard.BaseData.ShipType>;
      slotItems: Array<Dockyard.BaseData.SlotItem>;
      slotItemTypes: Array<any>;
    };

    /**
     * The player's personalized stuff
     */
    player: {
      id: number;
      profile: Dockyard.PlayerData.Profile;
      quests: Array<Dockyard.PlayerData.Quest>;
      fleets: Array<Dockyard.PlayerData.Fleet>;
      missions: Array<Dockyard.PlayerData.Mission>;
      docks: {
        repairDocks: Array<Dockyard.PlayerData.RepairDock>;
        constructionDocks: Array<Dockyard.PlayerData.ConstructionDock>;
      };
      ships: Array<Dockyard.PlayerData.Ship>;
      slotItems: Array<Dockyard.PlayerData.SlotItem>;
      materials: Dockyard.PlayerData.Materials;
    };
  }
}
