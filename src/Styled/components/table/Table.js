import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MaterialTable from "material-table";
import { tableIcons } from "./Material";

import Modal from "../Modal";
import { rs, hs } from "./TableStyle"
import { setModalToggle } from "../../../Modules/reducers/beerlist";

const Table = (props) => {
  const [clickedRow, setClickedRow] = useState({name: "", image_url: "", tagline: "", description: ""})

  const columns = useSelector((state) => state.beerlist.columns);
  const modalData = useSelector((state) => state.beerlist.modalData);

  const dispatch = useDispatch();

  const tableRef = useRef();

  const handleRowClick = (rowData) => {
    const clickedModalData = modalData.filter((item) => item.name === rowData.name)[0];
    setClickedRow(clickedModalData);
    dispatch(setModalToggle(true));
  }

  return (
    <div>
      <MaterialTable 
        tableRef={tableRef}
        title={props.title}
        columns={columns} 
        data={props.data} 
        icons={tableIcons}
        options={{
          rowStyle: (data, index) => index % 2 === 0 ? rs.evenRowStyle : rs.oddRowStyle,
          headerStyle: hs,
          selection: true,
        }}
        actions={[{ icon: props.action[0].icon, onClick: () => { props.action[0].onClick(); tableRef.current.onAllSelected(false) }  }]}
        onSelectionChange={(selected) => { props.selectionChange(selected); }}
        onRowClick={(e, rowData) => { handleRowClick(rowData); }}
      />
      <Modal name={clickedRow.name} image_url={clickedRow.image_url} tagline={clickedRow.tagline} description={clickedRow.description} />
    </div>
  )
}

export default Table;