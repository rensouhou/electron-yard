/**
 * Models
 */
namespace KCS {
  export module Models {
    interface PlayerShip {
      api_backs: number;
      api_bull: number;
      api_cond: number;
      api_exp: Array<number>;
      api_fuel: number;
      api_id: number;
      api_kaihi: [number, number];
      api_karyoku: [number, number];
      api_kyouka: Array<number>;
      api_leng: number;
      api_locked: number;
      api_locked_equip: number;
      api_lucky: [number, number];
      api_lv: number;
      api_maxhp: number;
      api_ndock_item: [number, number];
      api_ndock_time: number;
      api_nowhp: number;
      api_onslot: Array<number>;
      api_raisou: [number, number];
      api_sakuteki: [number, number];
      api_ship_id: number;
      api_slot: Array<number>;
      api_slot_ex: number;
      api_slotnum: number;
      api_sortno: number;
      api_soukou: [number, number];
      api_srate: number;
      api_taiku: [number, number];
      api_taisen: [number, number];
    }
    interface PlayerProfile {
      api_active_flag: number;
      api_comment?: string;
      api_comment_id?: string;
      api_count_deck: number;
      api_count_kdock: number;
      api_count_ndock: number;
      api_experience: number;
      api_fcoin: number;
      api_firstflag: number;
      api_furniture: Array<number>;
      api_large_dock: number;
      api_level: number;
      api_max_chara: number;
      api_max_kagu: number;
      api_max_slotitem: number;
      api_medals: number;
      api_member_id: number;
      api_ms_count: number;
      api_ms_success: number;
      api_nickname: string;
      api_nickname_id: number;
      api_playtime: number;
      api_pt_challenged: number;
      api_pt_challenged_win: number;
      api_pt_lose: number;
      api_pt_win: number;
      api_pvp: Array<number>;
      api_rank: number;
      api_st_lose: number;
      api_st_win: number;
      api_starttime: number;
      api_tutorial: number;
      api_tutorial_progress: number;
    }
    interface Fleet {
      api_flagship: string;
      api_id: number;
      api_member_id: number;
      api_mission: Array<number>;
      api_name: string;
      api_name_id: string;
      api_ship: Array<number>;
    }
    interface Log {
      api_message: string;
      api_no: number;
      api_state: string;
      api_type: string;
    }
    interface Furniture {}

    interface Material {
      api_id: MaterialType;
      api_member_id: number;
      api_value: number;
    }
  }

  export class Ship {
  }


  export class SlotItem {
  }

  export class ConstructionDock {
  }

  export class RepairDock {
  }

  export interface apiBasic {
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

  module API {
    export interface GET_BASE_DATA {
      api_basic: KCS.Models.PlayerProfile;
      api_deck_port: Array<KCS.Models.Fleet>;
      api_log: Array<KCS.Models.Log>;
      api_material: Array<KCS.Models.Material>;
      api_ndock: any;
      api_p_bgm_id: number;
      api_parallel_quest_count: number;
      api_ship: Array<KCS.Models.PlayerShip>;
    }
  }

  module Models {
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
}
