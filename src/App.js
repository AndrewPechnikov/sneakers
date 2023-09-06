

import { ReactComponent as Search } from './img/search.svg'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'





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
        <Card />
      </div>





    </div>

  </div>
}

export default App;
