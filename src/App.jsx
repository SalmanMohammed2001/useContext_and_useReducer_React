import './App.css'
import UserAuth from './context/UserAuth'
import Login from "./components/Login";



function App() {
    return (
        <UserAuth>
            <Login/>
        </UserAuth>
    )
}

export default App
