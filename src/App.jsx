import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/Layout';

// pages
import Main from './pages/Main/Main';
// Login
import Login from './pages/Login/Login';
import Join from './pages/Login/Join';
import FindPW from './pages/Login/FindPW';
import FindID from './pages/Login/FindID';
// Mypage
import Mypage from './pages/Mypage/Mypage';
import ReviewView from './pages/Mypage/ReviewView';

import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Complete from './pages/Complete/Complete';
import ProductList from './pages/Product/List';

// style
import CommonStyle from './style/Common.style';

function App() {
  return (
    <BrowserRouter>
      <CommonStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<Main />} />
          <Route path={'login'} element={<Login />} />
          <Route path={'login/findpw'} element={<FindPW />} />
          <Route path={'login/findid'} element={<FindID />} />
          <Route path={'login/join'} element={<Join />} />
          <Route path={'mypage/mypage'} element={<Mypage />} />
          <Route path={'mypage/review/view'} element={<ReviewView />} />
          <Route path={'cart'} element={<Cart />} />
          <Route path={'payment'} element={<Payment />} />
          <Route path={'complete'} element={<Complete />} />
          <Route path={'product/list'} element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
