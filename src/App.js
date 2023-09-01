
import { ReactComponent as Cart } from './img/cart.svg'
import logo from './img/logo.png'
import sneakers from './img/Sneakers/1.jpg'
import { ReactComponent as Heart } from './img/heart.svg'
import { ReactComponent as User } from './img/user.svg'
import { ReactComponent as Plus } from './img/plus.svg'
import { ReactComponent as Search } from './img/search.svg'
import { ReactComponent as HeartActive } from './img/heart-active.svg'
import { ReactComponent as Check } from './img/check.svg'



function App() {
  return <div className="wrapper clear">

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

        <div className="card d-flex flex-column aligh-center ">
          <img width={153} src={sneakers} alt="" />
          <h5>Чоловічі кроссівки Nike Kyrie 7</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column '>
              <span>Ціна</span>
              <b>3 999 грн.</b>
            </div>
            <button className='button'>
              <Plus width={11} height={11} />
            </button>
          </div>
        </div>


        <div className="card d-flex flex-column aligh-center ">
          <button className='button button__heart d-flex justify-center align-center'>
            <Heart width={14} height={13} />
          </button>

          <img width={153} src={sneakers} alt="" />
          <h5>Чоловічі кроссівки Nike Kyrie 7</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column '>
              <span>Ціна</span>
              <b>3 999 грн.</b>
            </div>
            <button className='button button__plus'>
              <Plus width={11} height={11} />
            </button>
          </div>
        </div>

        <div className="card d-flex flex-column aligh-center ">
          <button className='button button__heart button__heart--active d-flex justify-center align-center'>
            <HeartActive width={14} height={13} />
          </button>

          <img width={153} src={sneakers} alt="" />
          <h5>Чоловічі кроссівки Nike Kyrie 7</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column '>
              <span>Ціна</span>
              <b>3 999 грн.</b>
            </div>
            <button className='button button__plus--checked'>
              <Check width={11} height={11} />
            </button>
          </div>
        </div>


      </div>





    </div>

  </div>
}

export default App;
