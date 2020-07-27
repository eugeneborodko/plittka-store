import Contacts from './contacts.component'
import Categories from './categories.component'
import './../styles/header.scss'

export default () =>
  <header>
    <div className="header__container">
      <div className="container">
        <Contacts />
      </div>
    </div>
    <div className="container">
      <Categories />
    </div>
  </header>