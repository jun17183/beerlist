import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Checkbox } from 'antd';

import GlobalFont from "../Styled/fonts/fonts";
import Table from "../Styled/components/table/Table";
import { cbg } from "../Styled/components/table/TableStyle"
import Header, { Logo } from "../Styled/components/Header";
import { addCart } from "../Modules/reducers/beerlist";

const BeerList = () => {
  const [stateData, setStateData] = useState([]);
  const [stateCart, setStateCart] = useState([]);

  const initialTableData = useSelector((state) => state.beerlist.tableData);
  const loading = useSelector((state) => state.beerlist.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('loading finish');
    if (!loading) { setStateData(initialTableData); }
  }, [loading]);

  // abv check box
  const abvCheckbox = (
    <div>abv : 
      <Checkbox.Group style={cbg} onChange={handleSortingAbv}>
        <Checkbox value="4-7">4-7</Checkbox>
        <Checkbox value="7-10">7-10</Checkbox>
        <Checkbox value="10-13">10-13</Checkbox>
      </Checkbox.Group>
    </div>
  );

  // action
  const action = [
    {
      icon: () => <Logo icon="cart_icon"></Logo>,
      onClick: () => { dispatch(addCart(stateCart)); }
    }
  ];

  // sort by abv
  function handleSortingAbv(abvArr) {
    if (abvArr.length === 0) {
      setStateData(initialTableData);
    } else {
      let newTableData = [];

      for (const abv of abvArr) {
        let firstAbv = parseInt(abv.split("-")[0]);
        let secondAbv = parseInt(abv.split("-")[1]);

        const tempArr = initialTableData.filter(item => (item.abv >= firstAbv && item.abv < secondAbv));
        newTableData = [...newTableData, ...tempArr];
      }

      newTableData.sort((a, b) => { return a.id - b.id });
      setStateData(newTableData);
    }
  }

  return (
    <div>
      <GlobalFont />
      <Header title="Beer List" menu="cart" />
      <Table title={abvCheckbox} data={stateData} action={action} selectionChange={setStateCart} />
    </div>
  );
}

export default BeerList;