export interface IStock {
    id: number,
    stockName: string;
    countryOfListing: string;
    ticker: string;
    marginRate: boolean;
    limitedRiskPremium: number
}

export interface IAppState {
    records: Array<IStock>
}

export const getDefaultAppState = ():IAppState => ({
    records: []
});