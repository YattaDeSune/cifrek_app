import {Loader} from "./components/Loader";
import {GetCodePage} from "./components/GetCodePage";
import { Routes, Link, Route} from "react-router-dom";
import {Autorization} from "./components/Autorization";
import {Schedule} from "./components/Schedule.jsx";
import {Electives} from "./components/Electives.jsx";
import {Rating} from "./components/Rating.jsx";
import {Teachers} from "./components/Teachers.jsx";
import {Profile} from "./components/Profile.jsx";

function App() {

    // const [loading, setLoading] = useState(false)

    return (
        <Routes>
            <Route path='/' element={<Autorization />} />
            <Route path='/code' element={<GetCodePage />} />
            <Route path='/electives' element={<Electives />} />
            <Route path='/schedule/*' element={<Schedule />}>
                <Route path='1' element={<Schedule />} />
                <Route path='2' element={<Schedule />} />
                <Route path='3' element={<Schedule />} />
                <Route path='4' element={<Schedule />} />
                <Route path='5' element={<Schedule />} />
                <Route path='6' element={<Schedule />} />
            </Route>
            <Route path='/rating' element={<Rating />} />
            <Route path='/teachers' element={<Teachers />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/loader' element={<Loader />} />
        </Routes>
    );
}

export default App;