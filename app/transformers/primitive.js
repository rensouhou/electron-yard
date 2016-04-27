/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/*eslint no-confusing-arrow:0*/
/**
 * @overview
 *  Convenience functions for mapping and filtering API data into
 *  primitives.
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/primitive
 * @flow
 */

// getArrayOrDefault :: a -> b
export const getArrayOrDefault = (arr:Array):Array => arr || [];

// getObjectOrDefault :: a -> b
export const getObjectOrDefault = (obj:Object):Object => obj || {};

// asNumber :: a -> Integer b
export const asNumber = (num:any):number => !isNaN(parseInt(num, 10)) ? parseInt(num, 10) : null;

// asBool :: a -> Bool b
export const asBool = (n:number):boolean => asNumber(n) === 1;

// notEmpty :: a -> Bool b
export const notEmpty = (n:number):boolean => asNumber(n) !== -1;

// formatLineBreaks :: String a -> String b
export const formatLineBreaks = (s:string):string => (s || '').replace(/<br\s?\/?>/gi, '\n');
