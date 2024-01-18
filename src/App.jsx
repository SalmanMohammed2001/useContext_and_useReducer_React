import './App.css'
import UserAuth from './context/UserAuth'
import Login from "./components/Login";
import UserActivity from "./context/UserActivity";
import UserInput from "./components/UserInput.jsx";



function App() {
    return (
        <UserAuth>
            <UserActivity>
            <Login/>
                <UserInput/>
            </UserActivity>
        </UserAuth>
    )
}

export default App
