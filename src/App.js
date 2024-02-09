import React, { useState } from "react";
import "./App.css";

import { useQuery } from "@apollo/client";

import { ANTIFILTER_INFO } from "./Queries/antifilter_Info";
import { TARIFF_IN_ANTI_FILTER } from "./Queries/tariffIn_Anti_Filter";

import { Tariff } from "./components/Tariff/Tariff";

const regionUrl = "moskva";

function App() {
  const [providerId, setProviderId] = useState(null);
  const [fixProvider, setFixProvider] = useState(false);
  const [priceTariff, setPriceTariff] = useState(null);
  const [fixPrice, setFixPrice] = useState(false);
  const [callsTariff, setCallsTariff] = useState(null);
  const [fixCalls, setFixCalls] = useState(false);
  const [internetTariff, setInternetTariff] = useState(null);
  const [fixInternet, setFixInternet] = useState(false);
  const [switchTariff, setSwitchTariff] = useState(null);

  const getFix = () => {
    let arrFixName = ["provider", "internet", "calls", "price"];
    let objFixState = {
      provider: fixProvider,
      internet: fixInternet,
      calls: fixCalls,
      price: fixPrice,
    };
    let result = "";
    arrFixName.forEach((state) => {
      if (objFixState[state] === true) {
        if (result.length > 0) {
          result += `&${state}`;
        } else {
          result += state;
        }
      }
    });
    return result;
  };

  const fix = getFix();

  const {
    loading,
    error,
    data: InfoData,
  } = useQuery(ANTIFILTER_INFO, {
    variables: {
      type: "antifilter",
    },
    skip: false,
  });

  const {
    loading: loadTariff,
    error: errorTariff,
    data: tariffData,
    previousData: tariffPreviousData,
  } = useQuery(TARIFF_IN_ANTI_FILTER, {
    variables: {
      region: regionUrl,
      providerJoin: true,
      with_aggregate: true,
      providerId: providerId,
      internet: internetTariff,
      fix: fix,
      price: priceTariff,
      switch: switchTariff,
      calls: callsTariff,
    },
    skip: false,
  });

  console.log("InfoData", InfoData);
  console.log("tariffData", tariffData);

  return (
      <Tariff />
  );
}

export default App;
