import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/Layout';

// pages
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Complete from './pages/Complete/Complete';

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
          <Route path={'cart'} element={<Cart />} />
          <Route path={'payment'} element={<Payment />} />
          <Route path={'complete'} element={<Complete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
