

import { ReactComponent as Plus } from './../../img/plus.svg'
import { ReactComponent as Arrow } from './../../img/arrow.svg'
import { useEffect, useState } from 'react';




const Drawer = ({ onClickClose, items = [], functionSetCart }) => {









	return (

		< div className="overlay" >

			<div className="drawer d-flex flex-column">
				<div className='cartHeader d-flex justify-between'>
					<h2 className='mb-30' >Корзина</h2>
					<button className='button button__remove' onClick={onClickClose} >
						<Plus className='remove' width={11} height={11} />
					</button>
				</div>

				<div className="items">
					{items.map((obj, index) => {
						return (
							<div className="cartItem d-flex align-center justify-between" key={index} >
								<img width={70} height={58.9} src={obj.img} alt="Кросівки" />
								<div className='cartItem__text'>
									<p className='mb-5'>{obj.name}</p>
									<b>{obj.price}</b>
								</div>
								<button className='button button__remove'>
									<Plus className='remove' width={11} height={11} onClick={() => functionSetCart(items.filter((obj, i) => i !== index))} />
								</button>
							</div>
						)
					})
					}

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
		</ div >
	)
}

export default Drawer;