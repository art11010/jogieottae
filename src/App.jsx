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
import UserLayout from './components/Mypage/UserLayout';
import MyInfo from './pages/Mypage/MyInfo';
import BookingList from './pages/Mypage/BookingList';
import BookingDetails from './pages/Mypage/BookingDetails';
import BookingCancel from './pages/Mypage/BookingCancel';
import BookingReview from './pages/Mypage/BookingReview';
import UserDelete from './pages/Mypage/UserDelete';
// Product
import ProductList from './pages/Product/List';
// Pay
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Complete from './pages/Complete/Complete';
// Notice
import Notice from './pages/Notice/Notice';
// Admin
import AdminLayout from './components/AdminLayout';
import AdminSection from './components/Admin/AdminSection';
import Admin from './pages/Admin/Login/Login';
import AdminJoin from './pages/Admin/Login/Join';
import AdminFindPW from './pages/Admin/Login/FindPW';
import AdminFindID from './pages/Admin/Login/FindID';
import AdminUserList from './pages/Admin/User/List';

// style
import CommonStyle from './style/Common.style';

function App() {
  return (
    <BrowserRouter>
      <CommonStyle />
      <Routes>
        {/* Layout */}
        <Route element={<Layout />}>
          <Route path={'/'} element={<Main />} />
          <Route path={'cart'} element={<Cart />} />
          <Route path={'login'} element={<Login />} />
          <Route path={'login/join'} element={<Join />} />
          <Route path={'login/findpw'} element={<FindPW />} />
          <Route path={'login/findid'} element={<FindID />} />
          <Route path={'mypage'} element={<UserLayout />}>
            <Route path={'myinfo'} element={<MyInfo />} />
            <Route path={'myinfo/delete'} element={<UserDelete />} />
            <Route path={'booking'} element={<BookingList />} />
            <Route path={'booking/details'} element={<BookingDetails />} />
            <Route path={'booking/cancel'} element={<BookingCancel />} />
            <Route path={'booking/review'} element={<BookingReview />} />
          </Route>
          <Route path={'payment'} element={<Payment />} />
          <Route path={'payment/complete'} element={<Complete />} />
          <Route path={'join/complete'} element={<Complete />} />
          <Route path={'delete/complete'} element={<Complete />} />
          <Route path={'product'} element={<ProductList />} />
          <Route path={'notice'} element={<Notice />} />
        </Route>
        {/* AdminLayout */}
        <Route element={<AdminLayout />}>
          <Route path={'admin'} element={<Admin />} />
          <Route path={'admin/join'} element={<AdminJoin />} />
          <Route path={'admin/findpw'} element={<AdminFindPW />} />
          <Route path={'admin/findid'} element={<AdminFindID />} />
          <Route element={<AdminSection />}>
            <Route path={'admin/accm'} element={<AdminUserList />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
