import Contacts from './contacts.component'
import './../styles/header.scss'

export default () =>
  <header>
    <div className="header__container">
      <div className="container">
        <Contacts />
      </div>
    </div>
  </header>