
import { ReactComponent as Cart } from './img/cart.svg'
import logo from './img/logo.png'
import sneakers from './img/Sneakers/1.jpg'
import { ReactComponent as Heart } from './img/heart.svg'
import { ReactComponent as User } from './img/user.svg'
import { ReactComponent as Plus } from './img/plus.svg'
import { ReactComponent as Search } from './img/search.svg'
import Card from './components/Card/Card'


import { ReactComponent as Arrow } from './img/arrow.svg'



function App() {
  return <div className="wrapper clear">

    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer d-flex flex-column">
        <div className='cartHeader d-flex justify-between'>
          <h2 className='mb-30' >Корзина</h2>
          <button className='button button__remove'>
            <Plus className='remove' width={11} height={11} />
          </button>
        </div>

        <div className="items">
          <div className="cartItem d-flex align-center justify-between">
            <img width={70} height={58.9} src={sneakers} alt="Кросівки" />
            <div className='cartItem__text'>
              <p className='mb-5'>Чоловічі кроссівки Nike Kyrie 7</p>
              <b>3 999 грн.</b>

            </div>
            <button className='button button__remove'>
              <Plus className='remove' width={11} height={11} />
            </button>
          </div>

          <div className="cartItem d-flex align-center justify-between">
            <img width={70} height={58.9} src={sneakers} alt="Кросівки" />
            <div className='cartItem__text'>
              <p className='mb-5'>Чоловічі кроссівки Nike Kyrie 7</p>
              <b>3 999 грн.</b>

            </div>
            <button className='button button__remove'>
              <Plus className='remove' width={11} height={11} />
            </button>
          </div>
          <div className="cartItem d-flex align-center justify-between">
            <img width={70} height={58.9} src={sneakers} alt="Кросівки" />
            <div className='cartItem__text'>
              <p className='mb-5'>Чоловічі кроссівки Nike Kyrie 7</p>
              <b>3 999 грн.</b>

            </div>
            <button className='button button__remove'>
              <Plus className='remove' width={11} height={11} />
            </button>
          </div>
          <div className="cartItem d-flex align-center justify-between">
            <img width={70} height={58.9} src={sneakers} alt="Кросівки" />
            <div className='cartItem__text'>
              <p className='mb-5'>Чоловічі кроссівки Nike Kyrie 7</p>
              <b>3 999 грн.</b>

            </div>
            <button className='button button__remove'>
              <Plus className='remove' width={11} height={11} />
            </button>
          </div>





        </div>

        <div className='cartTotalBlock'>
          <ul >
            <li className=''>
              <span>Всього</span>
              <div></div>
              <b>5 320 грн.</b>
            </li>
            <li className=''>
              <span>Доставка 50 грн.</span>
              <div></div>
              <b>4 270 грн.</b>
            </li>
          </ul>
          <button className='greenBtn'>Оформити замовлення
            <Arrow alt="Arrow" />
          </button>
        </div>
      </div>

    </div>

    <header className='d-flex justify-between align-center p-40'>
      <div className="d-flex align-center">
        <img className='mr-10' width={40} height={40} src={logo} alt="" />
        <div className="headerInfo ">
          <h3 className='text-uppercase'>React Sneakers</h3>
          <p className='opacity-5'>Магазин найкращих кросівок</p>
        </div>
      </div>

      <ul className="headerRight d-flex ">
        <li className='mr-30'>
          <Cart className='  cart mr-5 ' />
          <span>725 грн.</span>

        </li>
        <li className='mr-30'>
          <Heart className='heart' />
        </li>
        <li>
          <User className='user' />
        </li>
      </ul>
    </header>

    <div className="content p-40">

      <div className='d-flex align-center justify-between mb-40'>
        <h1 >Всі кросівки</h1>
        <div className='search-blok d-flex align-center '>
          <Search alt="search" />
          <input placeholder='Пошук...' />
        </div>


      </div>


      <div className="card-list">
        <Card></Card>




      </div>





    </div>

  </div>
}

export default App;
