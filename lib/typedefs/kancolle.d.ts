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
}