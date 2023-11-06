import ReactDOM from 'react-dom/client';
import HomeLayout from './components/HomeLayout/HomeLayout';
import Databinding from './Databinding/Databinding';

//Tạo root trên thẻ div#root

const root = ReactDOM.createRoot(document.getElementById('root'));
//JSX
root.render(
  <div className='abc'>
    {/* <HomeLayout /> */}
    <Databinding />
  </div>

);



