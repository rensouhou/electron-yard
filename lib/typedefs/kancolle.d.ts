/**
 * Models
 */
namespace KCS {
  export class Ship {
  }

  export class SlotItem {
  }

  export class ConstructionDock {
  }

  export class RepairDock {
  }

  export interface Material {
    api_id: MaterialType;
    api_member_id: number;
    api_value: number;
  }

  export interface apiBasic {
    api_active_flag: number;
    api_comment?: string;
    api_comment_id?: string;
    api_count_deck: number;
    api_count_kdock: number;
    api_count_ndock: number;
    api_experience: number;
    api_fcoin: number;
    api_firstflag: number;
  }

  enum MaterialType {
    Fuel = 1,
    Ammo = 2,
    Steel = 3,
    Bauxite = 4
  }
}

/**
 * API stuff
 */
namespace KCSApi {
  export interface Response {
    api_data: any;
    api_result: number;
    api_result_msg: string;
  }

  export interface PlayerFleet {
    api_flagship: any;
    api_id: number;
    api_member_id: number;
    api_mission: Array<number>;
    api_name: string;
    api_name_id: any;
    api_ship: Array<any>;
  }
}