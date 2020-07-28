import useSWR from 'swr'
import { useRouter } from 'next/router'
import Layout from './../../components/layout.component'
import Production from './../../components/production.component'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)
  const router = useRouter()
  const { id } = router.query
  const category = data['categories'].filter((category) => category.id === id)
  const currentCategory = category[0]

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  return (
    <Layout title="Продукция">
      {
        currentCategory.subcategory ? (
          currentCategory.subcategory.map((subcategory) => (
            <Production products={subcategory.production ?? []} title={subcategory.name} titleId={subcategory.id} />
          )
          )
        ) : (
            <Production products={currentCategory.production ?? []} title={null} />
          )
      }
    </Layout>
  )
}