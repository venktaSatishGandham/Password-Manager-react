import './index.css'

const PasswordManagerItem = props => {
  const {passwordItem, onDeleteItemFromList} = props
  const {id, name, website} = passwordItem
  const colors = ['red', 'green', 'yellow', 'pink', 'orange', 'blue']
  const index = Math.floor(Math.random() * 6)
  const newClassName = colors[index]
  const onDeleteItem = () => {
    onDeleteItemFromList(id)
  }

  return (
    <li className="listItem">
      <p className={`profile-img ${newClassName}`}>
        {website.slice(0, 1).toUpperCase()}
      </p>
      <div className="profile-details">
        <p className="profile-item-website">{website}</p>
        <p className="profile-item-name">{name}</p>
        <img
          alt="stars"
          className="stars"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        />
      </div>
      <button type="button" className="delete-button" onClick={onDeleteItem}>
        <img
          alt="delete"
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordManagerItem
