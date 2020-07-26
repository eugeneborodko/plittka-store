import useSWR from 'swr'
import uniqid from 'uniqid'

import './../styles/contacts.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())
const id = uniqid()

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <ul className="contacts" key={id}>
      {
        data['contacts'].map((contact, index) => (
          <li className="contacts__item" key={contact.id}>
            <a className={`contacts__link contacts__link_bg_${index + 1}`} href={contact.url}>{contact.text}</a>
          </li>
        ))
      }
    </ul>
  )
}
