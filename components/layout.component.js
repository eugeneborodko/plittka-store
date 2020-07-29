import Head from 'next/head'

import Header from './header.component'
import Footer from './footer.component'

export default ({ children, title = 'Интернет-магизин плитки', footer }) => <>
  <Head>
    <title>{title} | Plittka.by</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  </Head>
  <Header />
  <main className="main">
    {children}
  </main>
  <Footer additionalClassName={footer} />
</>