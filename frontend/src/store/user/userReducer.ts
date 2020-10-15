import actions from './userActions';

const defaultState = {};
export function userReducer(state = defaultState, action: any) {
    console.log('userReducer');
    switch (action.type) {
        case actions.LOGIN:
            return Object.assign({}, state, action);
        default:
            return state;
    }
}
