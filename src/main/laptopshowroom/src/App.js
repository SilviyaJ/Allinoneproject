import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import { List } from './List';
import { Create } from './Create';
import { Read } from './Read';
import { Update } from './Update';
 const App=()=>{
      return(
        <>
        <HashRouter>
        <Menu/>
        <Routes>
                    <Route exact path="/view"   element={<List/>} />
                    <Route exact path="/fresh"  element={<Create/>} />
                    <Route exact path="/open"   element={<Read/>} />
                    <Route exact path="/modify" element={<Update/>} />
        </Routes>
        </HashRouter>
        
        </>
      )
}

export default App;