import React, { useState } from "react";
import { ContinueButton } from "../../component/ContinueButton/continueButton";
import HvHeader from "../../component/HVHeader/hvHeader";
import StoresWrapper from "../../component/StoresWrapper/storesWrapper";
import { GreyCenterLayout } from "../../layouts/centerLayout";
import "./styles.css";

const dummyListOfShops = [
  {
    name: "Shoprite Ltd",
    description: "This is where we shop really right",
    selected: false,
  },
  {
    name: "Shopleft Ltd",
    description: "Your experience here is home and like you never left",
    selected: false,
  },
  {
    name: "Cowards Ltd",
    description: "Yeah we are onwards with cows",
    selected: false,
  },
  {
    name: "Sheep Ltd",
    description: "Dont shleeep on us,we wool shock you",
    selected: false,
  },
  {
    name: "Goaat Ltd",
    description: "You go at it boyyy",
    selected: false,
  },
];

const SelectStore = () => {
  const [dummyList, setDummyList] = useState(dummyListOfShops);
  const [copy, setCopy] = useState(dummyListOfShops);

  //handle the selection of a store prior to login
  const handleStoreSelection = (name) => {
    let temporaryList = [...dummyList];
    temporaryList.map((store) =>
      store.name === name
        ? (store.selected = !store.selected)
        : (store.selected = false)
    );
    setDummyList(temporaryList);
  };

  //handle store search
  const handleStoreSearch = (name) => {
    let temporaryList = [...dummyList];
    let searchResult = temporaryList.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setCopy(searchResult);
  };

  return (
    <GreyCenterLayout>
      <span className="bolder storeListHeading">Welcome</span>
      <span className="description storeListDescription">
        Please select the name of the store you want to sign in to.
      </span>
      <StoresWrapper
        onSearch={handleStoreSearch}
        dummyListOfShops={copy}
        onSelect={handleStoreSelection}
      />
      <ContinueButton data={copy} />
    </GreyCenterLayout>
  );
};

export default SelectStore;
