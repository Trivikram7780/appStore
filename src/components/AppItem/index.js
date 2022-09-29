import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <li className="app-container">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
