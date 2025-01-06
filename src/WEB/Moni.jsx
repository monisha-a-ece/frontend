import './Moni.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';

import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
function Moni(){
  return(
    <div id='whole'>
     <Router>
       <nav>
          <div id="com">
        
        <li><Link to='/'>company</Link></li>
         <li> <Link to='/'>company</Link></li>
        </div>
        
          <li><Link to='/'>home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
         
      </nav>
      <Routes>
       <Route path="/"element={<Home/>}/>
       <Route path='/About'element={<About/>}/>
       <Route path="/Contact"element={<Contact/>}/>
      </Routes>
     
     </Router>
     <footer>
          <h2>&copy; Copyright of our company.</h2>
        </footer>
      </div>
     
  )
}
export default Moni;