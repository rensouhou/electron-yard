/**
 * Dockyard namespace
 */
namespace Dockyard {
  /**
   * Non-personal base data
   */
  export module BaseData {
    interface Ship {}
    interface ShipTypes {}
    interface SlotItem {}
  }

  export module PlayerData {
    interface Ship {
      id: number;
      shipId: number;
      name: {
        romanised?: string;
        kanji: string;
        reading: string;
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
      shipTypes: Array<Dockyard.BaseData.ShipTypes>;
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
