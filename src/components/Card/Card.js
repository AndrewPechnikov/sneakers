import { ReactComponent as Heart } from './../../img/heart.svg'
import { ReactComponent as Check } from './../../img/check.svg'
import { ReactComponent as HeartActive } from './../../img/heart-active.svg'





const Card = ({ title, price, sneakers }) => {
    return (
        <div className="card d-flex flex-column aligh-center ">
            <button className='button button__heart button__heart--active d-flex justify-center align-center'>
                <HeartActive width={14} height={13} />
            </button>

            <img width={153} src={sneakers} alt="" />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Ціна</span>
                    <b>{price}</b>
                </div>
                <button className='button button__plus--checked'>
                    <Check width={11} height={11} />
                </button>
            </div>
        </div>
    )
}

export default Card;