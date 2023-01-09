import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import NoMatch from './pages/NoMatch';
import ReadBlog from './pages/ReadBlog';
// import SearchInput from './pages/SearchInput';

function App() {

  // let routePath = '';

  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>EmperorBlog</h1>
          <div className='nav-links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to='addblog'>Add Blog</NavLink>
            {/* {<SearchInput />} */}
          </div>
        </nav>
      </header>
      <div className="App">
        <Routes>
          <Route index element= {< Home/>} />
          <Route path='addblog' element={< AddBlog />} />
          <Route path='blog/:id' element={ <ReadBlog/> } />
          <Route path='*' element={ <NoMatch/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
