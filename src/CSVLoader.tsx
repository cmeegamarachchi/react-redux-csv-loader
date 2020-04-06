import React from "react";
import FileSelector from "./FileSelector";
import RecordViewer from "./RecordViewer";
import {IAppState, IStock} from "./store/types";
import {addRecords} from "./store/actions";
import {connect} from "react-redux";

interface IProps {
    records: Array<IStock>
    addRecords: ([]) => any
}

const CSVLoader = ({records, addRecords}:IProps) => {
    
    const OnRecordsLoaded = (records: Array<IStock>) => {
        addRecords(records);
    };
    
    return <>
        <FileSelector recordsLoaded={OnRecordsLoaded} />
        <RecordViewer records={records}/>
     </>
};

const mapStateToProps = (state: IAppState, ownProps: any) => ({ records: state.records });

const mapDispatchToProps = (dispatch: any) => {
    return { addRecords: (records:any) => dispatch(addRecords(records)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(CSVLoader);