import {getDefaultAppState, IAppState} from "./types";

const recordReducer = (state: IAppState = getDefaultAppState(), action: any) => {
    switch (action.type) {
        case 'ADD_RECORDS_SUCCESS':
            return action.records;
        default:
            break;
    }

    return state;
};

export {
    recordReducer
};
