/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/primitive
 */

export const asNumber = (num: any): number => parseInt(num, 10);
