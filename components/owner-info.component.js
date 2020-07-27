import useSWR from 'swr'
import uniqid from 'uniqid'

import './../styles/owner-info.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <ul className="owner-info" key={id}>
      {
        data['owner-info'].map((text) => (
          <li className="owner-info__item" key={text.id}>{text.text}</li>
        ))
      }
    </ul>
  )
}