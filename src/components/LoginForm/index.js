import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    onShowSubmitError: false,
    errorMessage: '',
  }

  onSubmitSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({onShowSubmitError: true, errorMessage: error})
  }

  verifyUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(fetchedData.jwt_token)
    } else {
      this.onSubmitFailure(fetchedData.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <div className="input-container">
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          className="username"
          placeholder="Username"
          id="username"
          onChange={this.onChangeUsername}
          value={username}
        />
      </div>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <div className="input-container">
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          className="username"
          id="password"
          onChange={this.onChangePassword}
          value={password}
        />
      </div>
    )
  }

  renderLoginForm = () => {
    const {onShowSubmitError, errorMessage} = this.state

    return (
      <form onSubmit={this.verifyUserDetails} className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="login-website-logo"
        />
        {this.renderUsernameField()}
        {this.renderPasswordField()}
        <button type="submit" className="login-button">
          Login
        </button>
        {onShowSubmitError ? (
          <p className="error-message">{`*${errorMessage}`}</p>
        ) : (
          ''
        )}
      </form>
    )
  }

  render() {
    return <div className="login-container">{this.renderLoginForm()}</div>
  }
}

export default LoginForm
