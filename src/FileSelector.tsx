import React from "react";
import Papa from 'papaparse';
import {IStock} from "./store/types";

interface IProps {
    recordsLoaded: (e:Array<IStock>) => void
}

const FileSelector = ({recordsLoaded}:IProps) => {

    const handleChange = (fileRef: File) => {
        
        const complete = (result: any) => {
            recordsLoaded(result.data.map((d:any, i:number): IStock => {
                return {
                    id: i,
                    stockName: d["Stock Name"],
                    countryOfListing: d["Country of Listing"],
                    ticker: d["Ticker"],
                    marginRate: d["Margin Rate"],
                    limitedRiskPremium: d["Limited Risk Premium"]
                }
            }))
        };
        
        Papa.parse(fileRef, { 
            worker: true,
            complete: complete,
            header: true
        });
    };

    return (<>
        <input type="file" name="file"
               onChange={(e) => handleChange(e.target.files![0])}
        />
    </>);
};

export default FileSelector;