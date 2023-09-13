import { ReactComponent as Heart } from './../../img/heart.svg';
import { ReactComponent as Check } from './../../img/check.svg';
import { ReactComponent as HeartActive } from './../../img/heart-active.svg';
import { useEffect, useState } from 'react';
import { ReactComponent as Plus } from './../../img/plus.svg';
import styles from './Card.module.scss';
console.log(styles);

const Card = ({ name, price, img, onFavorite, onPlus, id, isAdd }) => {
    const [isAddedProduct, setAddedProductState] = useState(isAdd);
    const [isAddFavorite, setAddedFavoriteState] = useState(isAdd);

    const onClickAddProduct = () => {
        if (!isAddedProduct) {
            onPlus({ name, price, img, id, isAdd: true })

        }
        else {
            onPlus({ name, price, img, id, isAdd: false })
        }
        setAddedProductState(!isAddedProduct);
    };

    const onClickAddFavoriteProduct = () => {
        onFavorite()
        setAddedFavoriteState(!isAddFavorite);
    };

    useEffect(() => { }, [isAddedProduct, isAddFavorite]);

    return (
        <div className={styles.card}>
            {isAddFavorite ? (
                <button
                    onClick={onClickAddFavoriteProduct}
                    className="button button__heart button__heart--active d-flex justify-center align-center"
                >
                    <HeartActive width={14} height={13} />
                </button>
            ) : (
                <button
                    onClick={onClickAddFavoriteProduct}
                    className="button button__heart d-flex justify-center align-center"
                >
                    <Heart width={14} height={13} />
                </button>
            )}

            <img width={153} src={img} alt="" />
            <h5>{name}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Ціна</span>
                    <b>{price}</b>
                </div>

                {isAddedProduct ? (
                    <button
                        className="button button__plus--checked"
                        onClick={onClickAddProduct}
                    >
                        <Check width={11} height={11} />
                    </button>
                ) : (
                    <button className="button button__plus" onClick={onClickAddProduct}>
                        <Plus width={11} height={11} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
