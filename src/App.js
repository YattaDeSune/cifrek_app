import './App.css';
import Loader from "./components/loader";
import {GetCodePage} from "./components/getCodePage";
import {Autorization} from "./components/autorization";
import { Routes, Link, Route} from "react-router-dom";

function App() {

    // const [loading, setLoading] = useState(false)
  
    return (
        <Routes>
            <Route path='/' element={<Autorization />} />
            <Route path='/code' element={<GetCodePage />} />
        </Routes>
    );
}

export default App;