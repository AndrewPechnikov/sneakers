

import { ReactComponent as Search } from './img/search.svg'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import sneakers from './img/Sneakers/1.jpg'





const arr = [
  { name: 'Чоловічі кросівки Nike Kyrie 7', price: 3999 },
  { name: 'Чоловічі кросівки Nike Airmax 270', price: 2999 }
]




function App() {
  return <div className="wrapper clear">


    <Drawer />
    <Header />

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
          arr.map((obj) => {
            return <Card title={obj.name} price={obj.price} img={sneakers} />
          })
        }

      </div>





    </div>

  </div>
}

export default App;
