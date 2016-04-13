/**
 * Dockyard namespace
 */
namespace Dockyard {
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

    interface SlotItem {}

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
      hp: {
        now: number;
        max: number;
      };
    }

    interface ShipType {}
    interface SlotItem {}
    interface Profile {}
    interface Fleet {}
    interface Quest {}
    interface Dock {}
    interface RepairDock extends Dock {}
    interface ConstructionDock extends Dock {}
    interface Profile {}
    interface Materials {
      fuel: number;
      ammo: number;
      steel: number;
      bauxite: number;
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
}

namespace __PROTO {
  enum Status { OK, ERROR }

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
      docks: {
        repairDocks: Array<Dockyard.PlayerData.RepairDock>;
        constructionDocks: Array<Dockyard.PlayerData.ConstructionDock>;
      };
      inventory: {
        ships: Array<Dockyard.PlayerData.Ship>;
        slotItems: Array<Dockyard.PlayerData.SlotItem>;
        materials: Dockyard.PlayerData.Materials;
      }
    };
  }
}
