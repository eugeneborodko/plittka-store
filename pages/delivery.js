import useSWR from 'swr'
import uniqid from 'uniqid'

import Layout from './../components/layout.component'
import DeliveryInfo from './../components/delivery-info.component'
import './../styles/delivery.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <Layout title="Доставка">
      <div className="container">
        <h2 className="title">Доставка</h2>
        <ul className="delivery" key={id}>
          {
            data['delivery'].map((item) => (
              <li className="delivery__item" key={item.id}>
                <h4 className="delivery__title">{item.title}</h4>
                <p className="paragraph">{item.text}</p>
              </li>
            ))
          }
        </ul>
        <DeliveryInfo />
      </div>
    </Layout>
  )
}