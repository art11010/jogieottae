import React from 'react';
import { Link } from 'react-router-dom';

function Table(props) {
  const { rows, cols, headNameObj, currentPath, sellerId } = props;
  const tableData = props.children;

  const tableHeader = Object.keys(headNameObj).map((headItem, headIdx) => {
    return (
      <td key={`tbHeadColumn${headIdx}`} className="text-center">
        {headNameObj[headItem]}
      </td>
    );
  });

  let colsItem = Object.keys(tableData[0]);
  const tableBody = tableData.map((e, i) => {
    let item = [],
      itemCols = [];
    for (var c = 0; c < cols; c++) {
      itemCols.push(
        <td key={`tbBodyColumn${c}`} className="text-center">
          <Link
            to={`${currentPath}/detail?id=${e.id}&sellerId=${sellerId}`}
            key={`page${i}`}
            className="hover:text-main"
          >
            {e[colsItem[c]]}
          </Link>
        </td>
      );
    }
    item.push(<tr key={`tbBodyRows${i}`}>{itemCols}</tr>);
    return item;
  });

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
}

export default Table;
