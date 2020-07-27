import useSWR from 'swr'
import uniqid from 'uniqid'

import './../styles/delivery-info.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <div className="delivery-info" key={id}>
      {
        data['delivery-info'].map((item) => (
          <p className="paragraph" key={item.id}>{item.text}</p>
        ))
      }
    </div>
  )
}