import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

function AdminSection() {
  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);
  const pathName = useLocation().pathname;
  const userType = pathName.includes('manager')
    ? 'ManagerMenuList'
    : 'SellerMenuList';
  const mainCate = pathName.includes('accm') ? '숙박' : '레저';

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/src/components/Admin/${userType}.json`);
      const menuList = res.data[0];
      renderList(menuList);
    }
    fetchData();
  }, []);

  // 현재 페이지 표시하는 함수
  function currentPage(current) {
    const highLight = 'bg-main text-white',
      listStyle = 'mb-2 text-lg font-bold rounded-lg';
    return `${listStyle} ${
      pathName.includes(current) ? highLight : 'hover:text-main'
    }`;
  }

  const renderList = (menuList) => {
    let list = new Array();
    let mainMenuKeys = Object.keys(menuList);
    let pathArr = new Array();

    mainMenuKeys.map((e, i) => {
      let listItem = [];
      let subMenuKeys = Object.keys(menuList[e]);
      for (let j = 0; j < subMenuKeys.length; j++) {
        let subMenuTitle = subMenuKeys[j];
        let subMenuLink = menuList[e][subMenuKeys[j]];

        pathArr = subMenuLink.split('/').splice(1);
        listItem.push(
          <li key={subMenuTitle}>
            <Link
              to={`${subMenuLink}?sellerId=${pathParams.get('sellerId')}${
                subMenuTitle.includes('목록') ? `&page=1` : ` `
              }`}
              className="font-normal"
            >
              {subMenuTitle}
            </Link>
          </li>
        );
      }
      list.push(
        <li
          key={e}
          tabIndex="0"
          className={`collapse ${currentPage(pathArr[2])}`}
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title peer-checked:bg-sub peer-checked:text-black">
            {e}
          </div>
          <ul className="collapse-content peer-checked:bg-sub peer-checked:text-black">
            {listItem}
          </ul>
        </li>
      );
      setMenu(list);
      return list;
    });
  };

  return (
    <section className="flex justify-between min-h-fix container m-auto">
      <aside className="flex flex-col w-1/5 bg-secondary rounded-xl p-4">
        <ul>{menu}</ul>
      </aside>
      <section className="flex flex-col w-3/4 pt-50 pb-50">
        <Outlet context={{ mainCate }} />
      </section>
    </section>
  );
}

export default AdminSection;
