import React from 'react';

function NoticeList(props) {
  const { noticelist } = props;
  const noticelistMap = noticelist.map((item, idx) => (
    <div
      key={item.id + idx}
      className="collapse collapse-arrow hover:text-main"
    >
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-lg border-b border-gray-400 peer-checked:text-main">
        {item.subject}
      </div>
      <div className="collapse-content bg-secondary text-secondary-content">
        <p className="pt-4">{item.description}</p>
        <div className="mt-5 text-right text-sm">
          <span className="block">~ {item.endTime} 까지</span>
          <span className="block">작성자 : {item.id}</span>
        </div>
      </div>
    </div>
  ));

  return <>{noticelistMap}</>;
}

export default NoticeList;
