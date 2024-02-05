import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Toolbar,
  Edit,
  Sort,
  Filter,
  Selection,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import Header from "../components/Header";
import { useStateContext } from "../context/ContextProvider";

const Customers = () => {
  const {  currentMode} = useStateContext();

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{allowDeleting:true, allowEditing:true}}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}

        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Selection, Filter, Sort]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
