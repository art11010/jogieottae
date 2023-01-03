import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/Layout';

// pages
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
