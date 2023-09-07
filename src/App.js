

import { ReactComponent as Search } from './img/search.svg'
import Card from './components/Card'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import sneakers1 from './img/Sneakers/1.jpg'
import sneakers2 from './img/Sneakers/2.jpg'
import sneakers3 from './img/Sneakers/3.jpg'
import sneakers4 from './img/Sneakers/4.jpg'
import { useEffect, useState } from 'react'











function App() {

  useEffect(() => {
    fetch("https://64f9bcfb4098a7f2fc14e8a4.mockapi.io/itemas")
      .then(res => {
        return res.json();
      })
      .then((json) => {
        setItems(json)
      })

  }, [])



  const [items, setItems] = useState([])

  const [cartOpened, setCartOpened] = useState(false)
  return <div className="wrapper clear">

    {cartOpened && <Drawer onClickClose={() => { setCartOpened(false) }} />}

    <Header onClickCart={() => { setCartOpened(true) }} />

    <div className="content p-40">

      <div className='d-flex align-center justify-between mb-40'>
        <h1 >Всі кросівки</h1>
        <div className='search-blok d-flex align-center '>
          <Search alt="search" />
          <input placeholder='Пошук...' />
        </div>


      </div>


      <div className="card-list">
        {
          items.map((obj, index) => {
            return <Card key={index} title={obj.name} price={obj.price} img={obj.sneakers} />
          })
        }

      </div>





    </div>

  </div>
}

export default App;
