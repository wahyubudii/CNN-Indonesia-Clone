import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NewsPage from './Pages/NewsPage'
import NewsDetailPage from './Pages/NewsDetailPage.js'
import NotFound from './Pages/NotFound'
import Upgrading from './Pages/Upgrading'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/nasional' element={<NewsPage />}></Route>
        <Route path='/internasional' element={<NewsPage />}></Route>
        <Route path='/ekonomi' element={<NewsPage />}></Route>
        <Route path='/olahraga' element={<NewsPage />}></Route>
        <Route path='/teknologi' element={<NewsPage />}></Route>
        <Route path='/hiburan' element={<NewsPage />}></Route>
        <Route path='/gaya-hidup' element={<NewsPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/upgrading' element={<Upgrading />}></Route>
      </Routes>
    </div>
  );
}

export default App;
