import React from 'react';

function Table(props){
  const { rows, cols, headNameObj } = props;
  const tableData = props.children;

  const tableHeader = Object.keys(headNameObj).map((headItem, headIdx) => {
    return <td className="text-center">{ headNameObj[headItem] }</td>;
  });

  let colsItem = Object.keys(tableData[0]);
  const tableBody = tableData.map((e, i) => {
    let item = [], itemCols = [];
    for (var c = 0; c < cols; c++) {
      itemCols.push(<td key={c} className="text-center">{ e[colsItem[c]] }</td>);
    }
    item.push(<tr>{ itemCols }</tr>);
    return item;
  });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            { tableHeader }
          </tr>
        </thead>
        <tbody>
          { tableBody }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
