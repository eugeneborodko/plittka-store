import Link from 'next/link'

import AdditionalCategories from './additional-categories.component'
import OwnerInfo from './owner-info.component'
import './../styles/footer.scss'

export default () =>
  <footer className="footer">
    <div className="container">
      <nav className="nav">
        <div className="logo">
          <Link href="/"><a className="logo__link">Plittka</a></Link>
        </div>
        <AdditionalCategories />
        <OwnerInfo />
      </nav>
    </div>
  </footer>