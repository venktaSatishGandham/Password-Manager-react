import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordManagerItem from '../PasswordManagerItem/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    name: '',
    password: '',
    listOfPasswords: [],
    searchValue: '',
  }

  onUpdateWebsiteInputValue = e => {
    this.setState({website: e.target.value})
  }

  onUpdateNameInputValue = e => {
    this.setState({name: e.target.value})
  }

  onUpdatePasswordInputValue = e => {
    this.setState({password: e.target.value})
  }

  onSubmitForm = e => {
    const {website, name, password} = this.state
    e.preventDefault()
    const newListItem = {
      id: uuidv4(),
      website,
      name,
      password,
    }
    this.setState(prev => ({
      listOfPasswords: [...prev.listOfPasswords, newListItem],
      name: '',
      website: '',
      password: '',
    }))
  }

  onChangeSearchValue = e => {
    this.setState({searchValue: e.target.value})
  }

  onDeleteItemFromList = id => {
    const {listOfPasswords} = this.state
    const remainingList = listOfPasswords.filter(each => each.id !== id)
    this.setState({listOfPasswords: remainingList})
  }

  render() {
    const {website, name, password, listOfPasswords, searchValue} = this.state
    return (
      <div className="app-container">
        <img
          alt="app logo"
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="form-container">
          <div className="form-container-first">
            <form onSubmit={this.onSubmitForm}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="one">
                <img
                  alt="website"
                  className="formimg website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onUpdateWebsiteInputValue}
                />
              </div>
              <div className="one">
                <img
                  alt="username"
                  className="formimg username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  value={name}
                  onChange={this.onUpdateNameInputValue}
                />
              </div>
              <div className="one">
                <img
                  alt="password"
                  className="formimg password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onUpdatePasswordInputValue}
                />
              </div>

              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="form-container-second">
            <img
              alt="password manager"
              className="password-manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
          </div>
        </div>
        <div className="list-container">
          <div className="list-container-first">
            <div className="list-container-first2">
              <p>Your Passwords</p>
              <p className="count">{listOfPasswords.length}</p>
            </div>
            <div className="list-container-second">
              <img
                alt="search"
                className="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                type="search"
                value={searchValue}
                placeholder="Search"
                className="input2"
                onChange={this.onChangeSearchValue}
              />
            </div>
          </div>
          <hr />
          <div className="show-passwords">
            <input type="checkbox" id="check" className="checkbox" />
            <label htmlFor="check">Show Passwords</label>
          </div>
          <ul className="list-of-items">
            {listOfPasswords.map(each => (
              <PasswordManagerItem
                key={each.id}
                onDeleteItemFromList={this.onDeleteItemFromList}
                passwordItem={each}
              />
            ))}
          </ul>
          {listOfPasswords && (
            <img
              alt="no passwords"
              className="no-passwords"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            />
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager

// :
