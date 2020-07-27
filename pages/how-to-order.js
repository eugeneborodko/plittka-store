import useSWR from 'swr'
import uniqid from 'uniqid'

import Layout from './../components/layout.component'
import './../styles/how-to-order.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <Layout title="Как сделать заказ">
      <div className="container">
        <h2 className="title">как сделать заказ</h2>
        <ul className="how-to-order" key={id}>
          {
            data['how-to-order'].map((text, index) => (
              <li className="how-to-order__item" key={text.id}>{`${index + 1}) ${text.text}`}</li>
            ))
          }
        </ul>
      </div>
    </Layout>
  )
}