import useSWR from 'swr'
import uniqid from 'uniqid'

import './../styles/subcategories.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default ({ subcategories }) => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <ul className="subcategories" key={id}>
      {
        subcategories ? (
          subcategories.map((subcategory) => (
            <li className="subcategories__item" key={subcategory.id}>
              <a className="subcategories__link" href="#">{subcategory.name}</a>
            </li>
          ))
        ) : null
      }
    </ul>
  )
}