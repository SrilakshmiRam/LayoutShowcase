import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId,isActive} = props
  const {tabId, displayText} = tabDetails
  const onclickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassname = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassname}`}
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem