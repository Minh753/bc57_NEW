import ReactDOM from 'react-dom/client';
//import scss ở index (Vì import ở bất kỳ file nào khi build vẫn ra index.html)
import "./assets/scss/style.scss"
//Cấu hình router dom


import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
//Tạo root trên thẻ div#root
import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang'
import BaiTapXemChiTiet from './BaiTapXemChiTiet/BaiTapXemChiTiet'
import ChangeColor from './StateDemo/ChangeColor';
import Header from './components/Header';
import HomeTemplate from './templates/HomeTemplate';
import Login from './Pages/Login';
import UserTemplates from './templates/UserTemplates';
import Register from './Pages/Register';
import Page404 from './Pages/Page404';
import Admin from './Pages/Admin';
import ReactForm from './Pages/ReactFrom/ReactForm';
import ReactLifeCycle from './Pages/ReactLifeCycle/ReactLifeCycle';
const root = ReactDOM.createRoot(document.getElementById('root'));
//JSX
root.render(
  <BrowserRouter>


    <Routes>
      <Route path='' element={<HomeTemplate />}>
        <Route index element={<div>Trang Chủ</div>}></Route>
        <Route path='gio-hang' element={<BaiTapGioHang />}></Route>
        <Route path='bt-change-color' element={<ChangeColor />}></Route>
        <Route path='xem-chi-tiet' element={<BaiTapXemChiTiet />}></Route>
        <Route path='react-form' element={<ReactForm />}></Route>
        <Route path='react-life-cycle' element={<ReactLifeCycle />}></Route>
      </Route>
      <Route path='user' element={<UserTemplates />}>
        <Route index element={<Login />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>

      </Route>

      <Route path='admin' element={<Admin />}></Route>
      <Route path='*' element={<Navigate to="" />} />
    </Routes>


  </BrowserRouter>


);



