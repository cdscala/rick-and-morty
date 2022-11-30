import './App.css';
import Welcome from './Routes/Welcome';
import Home from './Routes/Home';
import ContextWrapper from './Context/ContextWrapper'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes";
import Characters from './Routes/Characters';


function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcome/>} />
            <Route exact path={ROUTES.HOME} element={<Home/>}>
              <Route index path={ROUTES.CHARACTERSALL} element={<Characters/>}/>
              <Route path={ROUTES.UNKNOWN} element={<Characters/>}/>
              <Route path={ROUTES.FEMALE} element={<Characters/>}/>
              <Route path={ROUTES.MALE} element={<Characters/>}/>
              <Route path={ROUTES.GENDERLESS} element={<Characters/>}/>
            </Route>
          </Routes>
        </Router>
      </ContextWrapper>
    </div>
  );
}

export default App;
