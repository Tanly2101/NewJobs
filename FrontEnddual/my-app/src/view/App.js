// import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../component/header';
import Home from '../component/tinhlai';
import Lapkehoachtietkiem from '../component/lapkehoachtietkiem';
import Thatnghiep from '../component/thatnghiep';
import Tinhbaohiemxahoi1lan from '../component/tinhbaohiemxahoi1lan';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tietkiem' element={<Lapkehoachtietkiem />} />
        <Route path='/that-nghiep' element={<Thatnghiep />} />
        <Route path='/bao-hiem' element={<Tinhbaohiemxahoi1lan />} />
      </Routes>
    </>
  );
}

export default App;
