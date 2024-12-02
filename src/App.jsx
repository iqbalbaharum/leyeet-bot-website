import Feature from '@components/Feature';
import Header from '@components/Header';
import Footer from '@components/Footer'

import { Route, Routes } from 'react-router-dom'

import MainPage from '@pages/Main'
import BuyPage from '@pages/Buy';
// import BuyPage from '@pages/Buy'

const App = () => (
  <div className='flex min-h-screen flex-col'>
    <Header />
    <Routes>
      <Route path="" element={<MainPage />}></Route>
      <Route path="/buy" element={<BuyPage />}></Route>
    </Routes>
    <Footer />

  </div>
);

export default App;