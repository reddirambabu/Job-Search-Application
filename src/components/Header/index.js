import './index.css'

import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <div className="mobile-view-header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="navbar-website-logo"
          />
        </Link>
        <ul className="routes-container">
          <Link to="/" className="link-item">
            <li>
              <AiFillHome className="home-icon" />
            </li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li>
              <BsFillBriefcaseFill className="home-icon" />
            </li>
          </Link>

          <li>
            <FiLogOut className="home-icon" onClick={onClickLogout} />
          </li>
        </ul>
      </div>

      <div className="desktop-view-header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="navbar-website-logo"
          />
        </Link>
        <ul className="routes-container">
          <Link to="/" className="link-item">
            <li className="home">Home</li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="home">Jobs</li>
          </Link>
        </ul>
        <Link to="/">
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default withRouter(Header)
