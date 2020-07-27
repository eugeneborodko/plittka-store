import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

import Layout from './../components/layout.component'
import Preview from './../components/preview.component'
import Production from './../components/production.component'
import './../styles/index.scss'

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <Layout title={'Главная'}>
      <Preview />
      <Production products={data['products'][0]['best-products']} title={'хит продаж'} />
    </Layout>
  )
}