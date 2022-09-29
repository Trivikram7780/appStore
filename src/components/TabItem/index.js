// Write your code here
import './index.css'

const TabItem = props => {
  const {tablist, switchTab, isActive} = props
  const {tabId, displayText} = tablist

  const switching = () => {
    switchTab(tabId)
  }

  const specialBtn = isActive ? 'active-btn' : ''

  return (
    <li>
      <button className={`btn ${specialBtn}`} type="button" onClick={switching}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
