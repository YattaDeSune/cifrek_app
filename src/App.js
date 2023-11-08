import './App.css';
import Loader from "./components/loader";
import GetCodePage from "./components/getCodePage";
import {useState} from "react";
import Autorization from "./components/autorization";
import {BrowserRouter as Routes, Link, Route} from "react-router-dom";

function App() {

    const [loading, setLoading] = useState(false)
  
    return (
        <>
            <div>
                {loading && <Loader />}
                <Autorization />
            </div>

            <Routes>
                <Route path='/' element={<Loader />} />
                <Route path='/code' element={<GetCodePage />} />
            </Routes>
        </>
    );
}

export default App;