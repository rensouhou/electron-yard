/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handler for `GET_QUEST_LIST` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-quest-list
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import R from 'ramda';
import { getArrayOrDefault } from '../primitive';
import { quest } from '../api/quest';

/**
 * @param {KCS.Models.Quest} r
 * @returns {Dockyard.API.GetQuestList}
 */
export default function action$getQuestList(r:ApiRequest):ApiRequestResult {
  const {
          api_count,
          api_disp_page,
          api_page_count,
          api_exec_count,
          api_exec_type,
          api_list
        } = r.body;

  return {
    questCount: api_count,
    currentPage: api_disp_page,
    totalPageCount: api_page_count,
    quests: R.indexOf(R.prop('id'), getArrayOrDefault(api_list).map(quest)),
    $_unknown: {
      execCount: api_exec_count,
      execType: api_exec_type
    }
  };
}
