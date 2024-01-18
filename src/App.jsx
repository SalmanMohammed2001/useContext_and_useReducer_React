import './App.css'
import UserAuth from './context/UserAuth'
import Login from "./components/Login";
import UserActivity from "./context/UserActivity";



function App() {
    return (
        <UserAuth>
            <UserActivity>
            <Login/>
            </UserActivity>
        </UserAuth>
    )
}

export default App
