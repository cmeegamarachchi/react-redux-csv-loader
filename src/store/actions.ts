import {IStock} from "./types";

const addRecords= (records: Array<IStock>) => {
    return {
        type: 'ADD_RECORDS_SUCCESS',
        records
    }
};

export {
    addRecords
}
