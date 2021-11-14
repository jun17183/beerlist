export const GET_DATA = "GET_DATA";
export const SET_DATA = "SET_DATA";

export const SET_TABLE_DATA = "SET_TABLE_DATA";

export const SET_MODAL_DATA = "SET_MODAL_DATA";
export const SET_MODAL_TOGGLE = "SET_MODAL_TOGGLE";

export const SET_COLUMNS = "SET_COLUMNS";

export const SET_DATA_LOADING = "SET_DATA_LOADING";

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

export const getData = () => ({
  type: GET_DATA
});

export const setData = (data) => ({
  type: SET_DATA,
  data: data
});

export const setTableData = (tableData) => ({
  type: SET_TABLE_DATA,
  tableData: tableData
});

export const setModalData = (modalData) => ({
  type: SET_MODAL_DATA,
  modalData: modalData
});

export const setModalToggle = (toggle) => ({
  type: SET_MODAL_TOGGLE,
  modalToggle: toggle
});

export const setColumns = (columns) => ({
  type: SET_COLUMNS,
  columns: columns
});

export const setDataLoading = (loading) => ({
  type: SET_DATA_LOADING,
  loading: loading
});

export const addCart = (cart) => ({
  type: ADD_CART,
  addCart: cart
})

export const removeCart = (cart) => ({
  type: REMOVE_CART,
  removeCart: cart
})

const initialState = {
  data: undefined,
  tableData: undefined,
  modalData: undefined,
  columns: [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Tagline", field: "tagline" },
    { title: "First brewed", field: "first_brewed" },
    { title: "abv", field: "abv" },
    { title: "srm", field: "srm" },
    { title: "ph", field: "ph" },
    { title: "Attenuation level", field: "attenuation_level" },
  ],
  loading: false,
  cart: [],
  modalToggle: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Data
    case SET_DATA:
      const { data } = action;
      return Object.assign({}, state, { data: data });

    // Table Data
    case SET_TABLE_DATA:
      const { tableData } = action;
      return Object.assign({}, state, { tableData: tableData });

    // Modal Data
    case SET_MODAL_DATA:
      const { modalData } = action;
      return Object.assign({}, state, { modalData: modalData });

    case SET_MODAL_TOGGLE:
      const { modalToggle } = action;
      return Object.assign({}, state, { modalToggle: modalToggle });

    // Columns
    case SET_COLUMNS:
      const { columns } = action;
      return Object.assign({}, state, { columns: columns });

    // Loading
    case SET_DATA_LOADING:
      const { loading } = action;
      return Object.assign({}, state, { loading: loading });

    // Cart
    case ADD_CART:
      const { addCart } = action;
      const newAddedCart = addCart.filter(item => !state.cart.includes(item));
      return Object.assign({}, state, { cart: state.cart.concat(newAddedCart) });

    case REMOVE_CART:
      const { removeCart } = action;
      const newRemovedCart = state.cart.filter(item => !removeCart.includes(item));
      return Object.assign({}, state, { cart: newRemovedCart });

    default:
      return state;
  }
};