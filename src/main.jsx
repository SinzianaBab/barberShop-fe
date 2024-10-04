import './index.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelkomePage.jsx";
import ReactDOM from "react-dom/client";
import AboutTheBarber from "./pages/AbouthTheBarber.jsx";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/welcome" replace/>}/>
                <Route path="/welcome" element={<WelcomePage/>}/>
                <Route path="/aboutTheBarber" element={<AboutTheBarber/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);