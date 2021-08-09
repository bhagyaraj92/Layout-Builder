import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-main-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>
              <ul className="left-ul">
                <li className="list-left">Item 1</li>
                <li className="list-left">Item 2</li>
                <li className="list-left">Item 3</li>
                <li className="list-left">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="left-nav-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1 className="left-nav-heading">Right Navbar</h1>
              <div className="box-container">
                <p className="para-box">Ad 1</p>
                <p className="para-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
