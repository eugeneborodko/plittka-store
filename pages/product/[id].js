import useSWR from 'swr'
import { useRouter } from 'next/router'

import Layout from './../../components/layout.component'
import Product from './../../components/product.component'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default () => {
  const { data, error } = useSWR('/api/get-content', fetcher)
  const router = useRouter()
  const { id } = router.query

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  const bestProducts = data['products'][0]['best-products']
  const products = data['products'][1]['products']

  const filteredBestProducts = bestProducts.filter((product) => product.id === id)
  const filteredProducts = products.filter((product) => product.id === id)

  return (
    <Layout title="Товары">
      {
        filteredBestProducts ? (
          <Product product={filteredBestProducts[0]} />
        ) : (
            <Product product={filteredProducts[0]} />
          )
      }
    </Layout>
  )
}