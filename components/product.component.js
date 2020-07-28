import ProductCounter from './products-counter/products-counter.component'
import './../styles/product.scss'

export default ({ product }) => {
  return (
    <div className="container">
      <div className="product" >
        <img className="product__image" src={`/images/${product.image}`} alt="" width="300" height="200" />
        <div className="product__info">
          <h2 className="product__title">{product.name}</h2>
          <span className="product__price">{product.price} byn</span>
          <h3 className="product__subtitle">Описание</h3>
          <p className="paragraph">{product.description}</p>
          <h3 className="product__subtitle">Состав</h3>
          <p className="paragraph">{product.composition}</p>
          <h3 className="product__subtitle">Количество</h3>
          <ProductCounter />
          <h3 className="product__subtitle">Доставка</h3>
          <p className="paragraph">{product.delivery}</p>
          <a className="btn product__btn" href="#">Добавить в корзину</a>
        </div>
      </div>
    </div>
  )
}