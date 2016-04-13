/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/primitive
 * @flow
 */

export const getArrayOrDefault = (arr:Array):Array => arr || [];
export const asNumber = (num:any):number => parseInt(num, 10);
export const asBool = (n:number):boolean => n === 1;
export const notEmpty = (x:number):boolean => x !== -1; // not "api empty"
export const formatLineBreaks = (s:string):string => (s || '').replace(/<br>/gi, '\n');
