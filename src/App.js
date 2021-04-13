import logo from './logo.svg';
import './App.css';
import { Signin } from "./component/login/signin";
import { Signup } from "./component/signup/signup";
import { BrowserRouter, Route} from "react-router-dom";
function App() {
  return (
    <div classNam="App">
      <BrowserRouter>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/' exact component={Signin}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
