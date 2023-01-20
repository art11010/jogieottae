import React from 'react';
import { Link } from 'react-router-dom';

function PagiNation(props) {
  const { atvPageNum, totalPages, currentPage, sellerId } = props;

  let totalPagesArr = new Array();
  for (var i = 0; i < totalPages; i++) {
    totalPagesArr.push(
      <Link to={`${currentPage}?sellerId=${sellerId}&page=${i}`} className={`btn ${ i == atvPageNum ? 'btn-active' : '' }`}>
        {i+1}
      </Link>
    );
  }

  return (
    <div className="btn-group m-auto">
        { totalPagesArr }
    </div>
  );
}

export default PagiNation;
