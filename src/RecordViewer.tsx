import React from "react";
import {IStock} from "./store/types";

interface IProps {
    records: Array<IStock>
}

const RecordViewer = ({records}: IProps) => {
    return <div>
        {records.slice(0,100).map((r) => (
            <div key={r.id} >{r.stockName}</div>
        ))}
    </div>
};

export default RecordViewer;