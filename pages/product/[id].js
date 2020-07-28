import useSWR from 'swr'
import { useRouter } from 'next/router'

import Layout from './../../components/layout.component'
import Product from './../../components/product.component'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default () => {
  const router = useRouter()
  const { id } = router.query
  // console.log(router.query.id)

  const { data, error } = useSWR('/api/get-content', fetcher)

  if (error) return <div>Не удалось загрузить данные</div>
  if (!data) return <div>Загрузка...</div>

  // console.log(data['products'])

  const bestProducts = data['products'][0]['best-products']
  const products = data['products'][1]['products']
  // console.log(bestProducts)
  // console.log(products)

  // bestProducts.forEach((product) => {
  //   if (product.id === id)
  //     let production = bestProducts
  // })

  // console.log(production)

  // data['products'].forEach((product) => {
  //   console.log(product)
  // })

  // console.log(bestProducts)

  const filteredBestProducts = bestProducts.filter((product) => product.id === id)
  const filteredProducts = products.filter((product) => product.id === id)

  // console.log(filtered)

  return (
    <Layout>
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