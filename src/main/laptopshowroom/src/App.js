import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import { List } from './List';
import { Create } from './Create';
import { Read } from './Read';
import { Update } from './Update';
import { Filter } from './Filter';
import { Alter } from './Alter';
import { Remove } from './Remove';
import { Login } from './Login';
 const App=()=>{
      return(
        <>
        {
          (sessionStorage.getItem('user'))?
          <>
          <HashRouter>
        <Menu/>
        <Routes>
                    <Route exact path="/view"   element={<List/>} />
                    <Route exact path="/fresh"  element={<Create/>} />
                    <Route exact path="/filter" element={<Filter/>} />
                    <Route exact path="/alter" element={<Alter/>} />
                    <Route exact path="/remove" element={<Remove/>} />
                    <Route exact path="/open/:key"   element={<Read/>} />
                    <Route exact path="/modify/:primary" element={<Update/>} />
        </Routes>
        </HashRouter>
          </>
          :
          <>
              <Login/>
              </>
        }
        
        
        </>
      )
}

export default App;