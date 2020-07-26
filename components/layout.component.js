import Head from 'next/head'

export default ({ children, title = 'Интернет-магизин плитки' }) => <>
  <Head>
    <title>{title} | Plittka.by</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  </Head>
  <main className="main">{children}</main>
</>