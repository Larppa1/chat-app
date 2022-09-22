import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgotPassword' element={<ForgotPassword />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </Router>
  )
}

export default App;