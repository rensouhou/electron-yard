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

  export interface Profile {
    id: number;
    name: string;
  }

  export interface Ship {
    id: number;
    shipId: number;
    name: {
      romanised?: string;
      kanji: string;
      reading: string;
    };
  }
}

namespace __PROTO {
  enum Status { OK, ERROR }

  export interface ApiRequest {
    status: Status;
    error?: any;
    body?: any;
    post?: any;
    path: string;
  }

  export interface AppState {
    core: {

    };
    game: {
      ships: Array<Dockyard.BaseData.Ship>;
      shipTypes: Array<Dockyard.BaseData.ShipTypes>;
      slotItems: Array<Dockyard.BaseData.SlotItem>;
    };
    player: {
      id: number;   // shorthand
      profile: Dockyard.Profile;
      ships: Array<Dockyard.Ship>;
      quests: Array<any>;
      docks: {
        repairDocks: any;
        constructionDocks: any;
      }
    };
  }
}
