import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <div className="configuration-content-container">
            <h1 className="Layout-heading">Layout</h1>
            <div className="inputs-container">
              <div className="checkbox-inputs-content">
                <input
                  type="checkbox"
                  id="content"
                  onChange={onChangeContent}
                  checked={showContent}
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>
              <div className="checkbox-inputs-content">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-inputs-content">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
