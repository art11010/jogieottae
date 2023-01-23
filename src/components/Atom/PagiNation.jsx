import React from 'react';
import { Link } from 'react-router-dom';

function PagiNation(props) {
  const { atvPageNum, totalPageNum, currentPath, sellerId } = props;

  // prev, next 버튼 만들기
  function JumpPage(props) {
    const { type } = props; // type => prev or next
    let innerTxt = '',
      pageLinkNum = 0;
    if (type == 'prev') {
      innerTxt = '«';
      pageLinkNum = intervalMin - 1;
    } else {
      innerTxt = '»';
      pageLinkNum = intervalMax + 1;
    }
    return (
      <Link
        to={`${currentPath}?sellerId=${sellerId}&page=${pageLinkNum}`}
        key={`jump${pageLinkNum}`}
        className={`btn text-lg`}
      >
        {innerTxt}
      </Link>
    );
  }

  // 현재 페이지 기준 min, max 페이지 구하기
  let intervalMin = 1,
    intervalMax = 1;
  for (var i = 1; i <= totalPageNum; i += 5) {
    if (i <= atvPageNum) {
      intervalMin = i;
      for (var j = 0; j < 5; j++) {
        intervalMax = i + j;
        if (i + j >= totalPageNum) break;
      }
    }
  }

  // 페이지네이션 만들기
  let totalPagesArr = new Array();
  if (intervalMin !== 1) {
    // prev 버튼
    totalPagesArr.push(<JumpPage type="prev" interval={intervalMin} />);
  }
  for (var i = intervalMin; i <= intervalMax; i++) {
    // page number 버튼
    totalPagesArr.push(
      <Link
        to={`${currentPath}?sellerId=${sellerId}&page=${i - 1}`}
        key={`page${i}`}
        className={`btn ${i - 1 == atvPageNum ? 'btn-active' : ''}`}
      >
        {i}
      </Link>
    );
  }
  if (intervalMax !== totalPageNum) {
    // next 버튼
    totalPagesArr.push(<JumpPage type="next" interval={intervalMax} />);
  }

  return <div className="btn-group m-auto mt-5">{totalPagesArr}</div>;
}

export default PagiNation;
