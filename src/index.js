import ReactDOM from 'react-dom/client';
import HomeLayout from './components/HomeLayout/HomeLayout';
import Databinding from './Databinding/Databinding';
//import scss ở index (Vì import ở bất kỳ file nào khi build vẫn ra index.html)
import "./assets/scss/style.scss"
import StyleComponent from './StyleComponent/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import ChangeColor from './StateDemo/ChangeColor';
import ChangeAvatar from './StateDemo/ChangeAvatar';
import ChangeCarColor from './StateDemo/ChangeCarColor';

//Tạo root trên thẻ div#root

const root = ReactDOM.createRoot(document.getElementById('root'));
//JSX
root.render(
  <div className='abc'>
    {/* <HomeLayout />
    <Databinding />
    <p className='text-red'>demo scss</p>
    <StyleComponent /> */}
    {/* <HandleEvent /> */}

    {/* <ChangeFontSize /> */}

    {/* <ChangeColor /> */}

    {/* <ChangeAvatar /> */}

    <ChangeCarColor />


  </div>


);



