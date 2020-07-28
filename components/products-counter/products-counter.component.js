import './../../styles/product-counter.scss'

export default () =>
  <div className="product-counter">
    <span className="product-counter__item">–</span>
    <input className="product-counter__input" type="text" value="1" />
    <span className="product-counter__item">+</span>
  </div>