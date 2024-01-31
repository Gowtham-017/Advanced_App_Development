// import "./App.css";
// import Landingpage from "./components/adminpages/AdminLandingpage";
// import Signin from "./components/adminpages/AdminSignin";
// import Home from "./components/adminpages/AdminHome";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Events from "./components/adminpages/AdminEvents";
// import CreateEvent from "./components/adminpages/AdminCreateEvent";
// import NavBar from "./components/adminpages/AdminNavBar";
// import DashBoard from "./components/adminpages/AdminDashBoard";
// import Settings from "./components/adminpages/Dashboardpages/Settings";
// function App() {
//   return (
//     <>
//       <Router>
//         <Switch>
//           <Route path="/" exact component={Landingpage} />
//           <Route path="/navbar" exact component={NavBar} />
//           <Route path="/signin" component={Signin} />
//           <Route path="/home" component={Home} />
//           <Route path="/events" component={Events} />
//           <Route path="/createevent" component={CreateEvent} />
//           <Route path="/dashboard" component={DashBoard} />
//           <Route path="/settings" component={Settings} />
//         </Switch>
//       </Router>
//     </>
//   );
// }
// export default App;



// import './App.css'
// import Landingpage from './UserComponents//Userpages/Landingpage'
// import AllPages from './UserComponents/Userpages/AllPages'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// function App() {
//   return (
//     <>
//       <Router>
//           <Switch>
//               <Route path="/" exact component={Landingpage} />
//               <Route path="/all" exact component={AllPages} />
//           </Switch>
//       </Router>
//     </>
//   )
// }
// export default App


// import './App.css'
// import AdminLandingpage from './AdminComponents/adminpages/AdminLandingpage'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AllAdminpages from './AdminComponents/adminpages/AllAdminpages'
// function App() {
//   return (
//     <>
//       <Router>
//           <Switch>
//               <Route path="/" exact component={AdminLandingpage} />
//               <Route path="/alladmin" exact component={AllAdminpages} />
//           </Switch>
//       </Router>
//     </>
//   )
// }
// export default App




// import './App.css'
// import AdminLandingpage from './AdminComponents/adminpages/AdminLandingpage'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AllAdminpages from './AdminComponents/adminpages/AllAdminpages'
// import Landingpage from './UserComponents//Userpages/Landingpage'
// import AllPages from './UserComponents/Userpages/AllPages'
// import { useState } from 'react';
// function App() {
//   const[openadmin,setAdmin] = useState('');
//   const[openuser,setUser] = useState('');
//   const handleAdmin = () => {
//     setAdmin(true)
//   }
//   const handleUser = () => {
//     setUser(true)
//   }
//   return (
//     <>
//       <Router>
//         <div className='start-page'>
//           <button className='start-button' onClick={handleAdmin}>Admin</button>
//           <button className='start-button' onClick={handleUser}>User</button>
//         </div>
//             {openadmin && (
//               <Switch>
//                   <Route path="/" exact component={AdminLandingpage} />
//                   <Route path="/alladmin" exact component={AllAdminpages} />
//               </Switch>
//             )}
//             {openuser && (
//               <Switch>
//                 <Route path="/" exact component={Landingpage} />  
//                 <Route path="/all" exact component={AllPages} />
//               </Switch>
//             )}
//       </Router>
//     </>
//   )
// }
// export default App




import './App.css';
import AdminLandingpage from './AdminComponents/adminpages/AdminLandingpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllAdminpages from './AdminComponents/adminpages/AllAdminpages';
import Landingpage from './UserComponents/Userpages/Landingpage';
import AllPages from './UserComponents/Userpages/AllPages';
import { useState } from 'react';
import Signin from './UserComponents/Userpages/Signin';

function App() {
  const [openadmin, setAdmin] = useState(false);
  const [openuser, setUser] = useState(false);
  const handleAdmin = () => {
    setAdmin(true);
    setUser(false);
  };
  const handleUser = () => {
    setUser(true);
    setAdmin(false);
  };
  return (
    <div className='starts'>
      <Router>
        <div className='start-page'>
          {!openadmin && !openuser && (
            <>
              <button className='start-button' onClick={handleAdmin}>Admin</button>
              <button className='start-button' onClick={handleUser}>User</button>
            </>
          )}
        </div>
        <Switch>
          <Route path="/" exact>{openadmin && <AdminLandingpage />}{openuser && <Landingpage />}</Route>
          <Route path="/alladmin" exact component={AllAdminpages} />
          <Route path="/all" exact component={AllPages} />
          <Route path="/signup" exact component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
