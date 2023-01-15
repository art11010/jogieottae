import React from 'react';

// Layout
import { Link, Outlet } from 'react-router-dom';

function AdminSection() {
  let menuList = {
    "숙박 시설 관리": [
      "숙박 시설 목록",
      "숙박 시설 등록",
    ],
    "블랙리스트 관리": [
      "블랙리스트 목록",
      "블랙리스트 등록",
    ],
    "리뷰 관리": [
      "리뷰 목록",
    ],
    "쿠폰 발급 관리": [
      "쿠폰 목록",
      "쿠폰 등록",
    ],
  }

  const renderList = () => {
    let list = [];
    let keys = Object.keys(menuList);
    for(let i = 0; i < keys.length; i++) {
        let listItem = [];
        for(let j = 0; j < menuList[keys[i]].length; j++) {
            listItem.push(<li key={menuList[keys[i]][j] + j}><Link to="">{menuList[keys[i]][j]}</Link></li>);
        }
        list.push(
            <li key={menuList[keys[i]] + i} tabIndex="0" className="collapse rounded-lg mt-1">
                <input type="checkbox" className="peer" />
                <div className="collapse-title peer-checked:bg-main peer-checked:text-white">{keys[i]}</div>
                <ul className="collapse-content peer-checked:bg-main peer-checked:text-white">{listItem}</ul>
            </li>
        );
    }
    return list;
  }

  return (
    <section className="flex justify-between min-h-fix container m-auto">
      <aside className="flex flex-col bg-secondary rounded-xl p-4">
        <ul>
            {renderList()}
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </section>
  );
}

export default AdminSection;
