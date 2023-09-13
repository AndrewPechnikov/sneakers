import { ReactComponent as Search } from './img/search.svg';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import { useEffect, useState } from 'react';

function App() {




  useEffect(() => {
    fetch('https://64f9bcfb4098a7f2fc14e8a4.mockapi.io/itemas')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        json.map((obj) => obj.isAdd = false)
        setItems(json);
      });
  }, []);




  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  console.log(items);

  const addItemToCart = (obj) => {
    console.log(obj)
    if (obj.isAdd) {
      setCartItems(prev => [...prev, obj])
    }
    else {
      setCartItems(prev => prev.filter((item, i) => obj.id !== item.id))
    }
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (<Drawer
        items={cartItems}
        functionSetCart={(i) => setCartItems(i)}
        onClickClose={() => { setCartOpened(false); }} />
      )}

      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі кросівки</h1>
          <div className="search-blok d-flex align-center ">
            <Search alt="search" />
            <input placeholder="Пошук..." />
          </div>
        </div>
        <div className="card-list">
          {items.map((item, index) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.url}
                isAdd={item.isAdd}
                onPlus={(obj, isAddedProduct) => addItemToCart(obj, isAddedProduct)}
                onFavorite={() => console.log("heart")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
