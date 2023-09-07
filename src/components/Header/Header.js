

import { ReactComponent as Heart } from './../../img/heart.svg'
import { ReactComponent as User } from './../../img/user.svg'
import { ReactComponent as Cart } from './../../img/cart.svg'
import logo from './../../img/logo.png'

const Header = (props) => {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className="d-flex align-center">
				<img className='mr-10' width={40} height={40} src={logo} alt="" />
				<div className="headerInfo ">
					<h3 className='text-uppercase'>React Sneakers</h3>
					<p className='opacity-5'>Магазин найкращих кросівок</p>
				</div>
			</div>

			<ul className="headerRight d-flex ">
				<li className='mr-30 cu-p' onClick={props.onClickCart}>
					<Cart className='  cart mr-5  ' />
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
	)
}

export default Header;