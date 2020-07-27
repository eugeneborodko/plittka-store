import useSWR from 'swr'
import uniqid from 'uniqid'

import './../styles/additional-categories.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <ul className="additional-categories" key={id}>
      {
        data['additional-categories'].map((category) => (
          <li className="additional-categories__item" key={category.id}>
            <a className="additional-categories__link" href="#">{category.name}</a>
          </li>
        ))
      }
    </ul>
  )
}