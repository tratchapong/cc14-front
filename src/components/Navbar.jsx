import {Link, NavLink, useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar() {
  const navigate = useNavigate()
  const {logout} = useAuth()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <nav className="flex gap-3 ">
      {/* <a href="/login">Login</a>
      <a href="/register">Register</a> */}
      <NavLink className='navlink' to='/'>Home</NavLink>
      <NavLink className='navlink' to='/login'>Login</NavLink>
      <NavLink className='navlink' to='/register'>Register</NavLink>
      <div className='navlink cursor-pointer' onClick={hdlLogout}>Logout</div>
    </nav>
  )
}
