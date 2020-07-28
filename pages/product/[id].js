import useSWR from 'swr'
import { useRouter } from 'next/router'

import Layout from './../../components/layout.component'
import Product from './../../components/product.component'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  const bestProducts = data['products'][0]['best-products']
  const products = data['categories']
  const filteredBestProducts = bestProducts.filter((product) => product.id === id)
  const productsList = []

  products.forEach((product) => {
    if (product.production) {
      product.production.forEach((item) => {
        if (item.id === id) {
          productsList.push(item)
        }
      })
    } else if (product.subcategory) {
      product.subcategory.forEach((item) => {
        item.production.forEach((elem) => {
          if (elem.id === id) {
            productsList.push(elem)
          }
        })
      })
    }
  })

  return (
    <Layout>
      {
        filteredBestProducts.length > 0 ? (
          <Product product={filteredBestProducts[0]} />
        ) : (
            <Product product={productsList[0]} />
          )

      }
    </Layout>
  )
} 