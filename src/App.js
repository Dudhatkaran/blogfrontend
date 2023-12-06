import './App.css';
import { useLocation, useNavigate, Route, Routes } from 'react-router-dom';
import Loginpage from './Components/Loginpage/Loginpage';
import SingupPage from './Components/SingupPage/SingupPage';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Home from './Components/Home/Home';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Footer/Contact';
import Addblog from './Components/Add-blog/Add-blog';
import List from './Components/List/List';
import AllBlog from './Components/Allblogs/AllBlog';

function App() {

  const location = useLocation();
  const navigation = useNavigate();

  const [data, setData] = useState('');

  useEffect(() => {
    const item = sessionStorage.getItem('logintocken');
    if (item == null) {
      if (location.pathname !== '/login' && location.pathname !== '/singup') {
        navigation('login');
      }
    }
    setData(item);
  }, [location.pathname, navigation])

  return (
    <>

      {
        data == null
          ?
          <Routes>
            <Route path='/login' element={ <Loginpage /> } />
            <Route path='/singup' element={ <SingupPage /> } />
          </Routes>
          :
          <>
            <Navigationbar />
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/login' element={ <Loginpage /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='/blog' element={ <Blog /> } />
              <Route path='/add-blog' element={ <Addblog /> } />
              <Route path='/list' element={ <List /> } />
              <Route path='/contact' element={ <Contact /> } />
              <Route path='/allblog' element={ <AllBlog /> } />
            </Routes>
          </>
      }
      <Toaster />
    </>

  );
}

export default App;
