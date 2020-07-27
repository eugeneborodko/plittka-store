import useSWR from 'swr'
import Link from 'next/link'
import uniqid from 'uniqid'

import './../styles/categories.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <nav className="nav">
      <h1 className="logo">
        <Link href="/"><a className="logo__link">Plittka</a></Link>
      </h1>
      <ul className="categories" key={id}>
        {
          data['categories'].map((category) => (
            <li className="categories__item" key={category.id}>
              <a className="categories__link" href="#" >{category.name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}