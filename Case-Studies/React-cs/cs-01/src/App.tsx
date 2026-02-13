import React, { useState } from "react";
import type { Asset } from "./types/Asset";
import PortfolioSummary from "./components/PortfolioSummary";
import AssetEditor from "./components/AssetEditor";
import './App.css' 

const App: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleUpdate = (asset: Asset) => {
    setAssets(prev => [...prev, asset]);
  };

  return (
    <>
      <AssetEditor onUpdate={handleUpdate} />
      <PortfolioSummary assets={assets} />
    </>
  );
};

export default App;
