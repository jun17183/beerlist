import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GlobalFont from "../Styled/fonts/fonts";
import Header, { Logo } from "../Styled/components/Header";
import Table from "../Styled/components/table/Table";

import { removeCart } from "../Modules/reducers/beerlist";

const Cart = () => {
  const [stateCart, setStateCart] = useState([]);

  const cart = useSelector((state) => state.beerlist.cart);

  const dispatch = useDispatch();

  // action
  const action = [
    {
      icon: () => <Logo icon="minus_icon"></Logo>,
      onClick: () => { dispatch(removeCart(stateCart)); }
    }
  ];

  return (
    <div>
      <GlobalFont />
      <Header title="Cart" menu="list" />
      <Table title="My cart list" data={cart} action={action} selectionChange={setStateCart} />
    </div>
  );
}

export default Cart;