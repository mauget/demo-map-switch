/**
 * This module demonstrates use of a JS Map to replace large-ish switch statements.
 * Those are cumbersome and wordy. This approach can mitigate the amount of typing and reading noise.
 *
 * The demo maps a key to one of a collection of functions. It assumes all signatures are identical.
 * The use case here resembles a Redux reducer, but this paradigm applies to many switch statements.
 *
 * -Lou Mauget, 2020-03-06
 */
import * as actions from "./constants";

const actionOne = function (action, state) {
    return `action: ${action}, state: "${state}"`;
};

const actionTwo = function (action, state) {
    return `action: ${action}, state: "${state}"`;
};

const actionThree = function (action, state) {
    return `action: ${action}, state: "${state}"`;
};

const defaultAction = function (action, state) {
    return `action: ${action}, state: "${state}"`;
};

/**
 Replaces a JS switch statement by a JS Map, along with the one-liner in method reducer(action, state).
 Assumes that all target functions can handle identical signatures.
 Default action caught and handled.
 */
const switchMap = new Map()
    .set(actions.ACTION_ONE, actionOne)
    .set(actions.ACTION_TWO, actionTwo)
    .set(actions.ACTION_THREE, actionThree);

export default function reducer(action, state = null) {
    return switchMap.has(action) ? switchMap.get(action)(action, state) : defaultAction();
}
