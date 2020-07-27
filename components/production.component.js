import uniqid from 'uniqid'

import './../styles/production.scss'

const id = uniqid()

export default ({ products, title }) => {
  return (
    <div className="production">
      <h2 className="title production__title">{title}</h2>
      <div className="container">
        <div className="production__container" key={id}>
          {
            products.map((product, index) => (
              <div className="production__item" key={product.id}>
                <img className="production__image" src={`/images/${product.image}`} alt={`Товар ${index + 1}`} width="300" height="200" />
                <h3 className="production__name">{product.name}</h3>
                <span className="production__price">{product.price} byn</span>
                <a className="btn production__btn" href="#">Подробнее</a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}