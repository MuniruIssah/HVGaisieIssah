import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import SelectStore from './pages/ChooseStore/selectStore';
import Login from './pages/StoreLogin/login';
import { ResetPasswordRoutes } from './subRoutes/ResetPasswordRoutes';
import HVDashboard from "./pages/Dashboard/dashboard";
import "react-datetime/css/react-datetime.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/login" component={Login} />
         <Route path="/dashboard" component={HVDashboard} />
         <Route path="/reset_password" component={ResetPasswordRoutes} />
         <Route path="/" component={SelectStore}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
