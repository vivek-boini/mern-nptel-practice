import React from "react";
import type { Asset } from "../types/Asset";

interface PortfolioSummaryProps{
    assets: Asset[];
}

const PortfolioSummary: React.FC<PortfolioSummaryProps>=({assets})=>{
    const totalValue=assets.reduce((sum,a)=>sum+a.value,0);
    const avgChange=assets.reduce((sum,a)=>sum+a.change,0)/assets.length;

    return(
        <>
            <h1>PortfolioSummary</h1>
            <h2>
                Total Value: {totalValue}
                <br></br>
                Average Change: {avgChange}
            </h2>
        </>
    )
}

export default PortfolioSummary;