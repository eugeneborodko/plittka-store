import useSWR from 'swr'
import Link from 'next/link'
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
            {
              contact.url === '/basket' ? (
                <Link href={contact.url}>
                  <a className={`contacts__link contacts__link_bg_${index + 1}`}>{contact.text}</a>
                </Link>
              ) : (
                  <a className={`contacts__link contacts__link_bg_${index + 1}`} href={contact.url}>{contact.text}</a>
                )
            }
          </li>
        ))
      }
    </ul>
  )
}
