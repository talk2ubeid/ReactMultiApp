import Ecommpage from "./Screens/Ecommpage";
import Home from "./Screens/Home";
import Details from "./Screens/Details";
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Todo from "./Screens/Practice/Todo";


function App() {

  return (
    <div className="App">
      {/* <BrowserRouter >
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Ecommpage" element={<Ecommpage/>}/>
      <Route path="/Details" element={<Details/>}/>
      
      </Routes>
      </BrowserRouter> */}
      <Todo/>
  
    </div>
  );
}

export default App;
