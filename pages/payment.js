import useSWR from 'swr'
import uniqid from 'uniqid'

import Layout from './../components/layout.component'
import './../styles/payment.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <Layout title="Оплата">
      <div className="container">
        <h2 className="title">Оплата</h2>
        <h3 className="container container_subtitle">Способы оплаты</h3>
        <ul className="payment" key={id}>
          {
            data['payment'].map((item) => (
              <li className="payment__item" key={item.id}>
                <h4 className="payment__title">{item.title}</h4>
                <p className="paragraph">{item.text}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </Layout>
  )
}