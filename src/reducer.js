import * as actions from "./constants";

const actionOne = function () {
    return 'action 1';
};

const actionTwo = function () {
    return 'action 2';
};

const actionThree = function () {
    return 'action 3';
};

const switchMap = new Map()
    .set(actions.ACTION_ONE, actionOne)
    .set(actions.ACTION_TWO, actionTwo)
    .set(actions.ACTION_THREE, actionThree);

export default function reducer(key) {
    const item = switchMap.get(key);
    return item ? item() : " not found ";
}
