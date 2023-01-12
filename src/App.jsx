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
import UserLayout from './components/UserLayout';
import MyInfo from './pages/Mypage/MyInfo';
import MyReview from './pages/Mypage/MyReview';
import BookingList from './pages/Mypage/BookingList';
import BookingReview from './pages/Mypage/BookingReview';

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
          <Route path={'cart'} element={<Cart />} />
          <Route path={'login'} element={<Login />} />
          <Route path={'login/join'} element={<Join />} />
          <Route path={'login/findpw'} element={<FindPW />} />
          <Route path={'login/findid'} element={<FindID />} />
          <Route path={'mypage'} element={<UserLayout />}>
            <Route path={'myinfo'} element={<MyInfo />} />
            <Route path={'myreview'} element={<MyReview />} />
            <Route path={'booking'} element={<BookingList />} />
            <Route path={'booking/review'} element={<BookingReview />} />
          </Route>
          <Route path={'payment'} element={<Payment />} />
          <Route path={'complete'} element={<Complete />} />
          <Route path={'product'} element={<ProductList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
