import React from 'react'
import '../../../styles/App.css';
import { IProduct } from '../../../types/types'
import { useNavigate } from 'react-router-dom';

interface LikedProductProps {
    product: IProduct,
    setShoes: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAllClothes: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAllAccesories: React.Dispatch<React.SetStateAction<IProduct[]>>,
}

function LikedProduct({ product, setShoes, setAllClothes, setAllAccesories }: LikedProductProps) {

    const handleRemoveFromLikesClick = () => {
        setShoes((prevProducts: IProduct[]) => (
            prevProducts.map((p: IProduct) =>
                p.id === product.id
                    ? {
                        ...p, liked: false
                    }
                    : p
            )
        ))
        setAllClothes((prevProducts: IProduct[]) => (
            prevProducts.map((p: IProduct) =>
                p.id === product.id
                    ? {
                        ...p, liked: false
                    }
                    : p
            )
        ))
        setAllAccesories((prevProducts: IProduct[]) => (
            prevProducts.map((p: IProduct) =>
                p.id === product.id
                    ? {
                        ...p, liked: false
                    }
                    : p
            )
        ))
    }

    const navigate = useNavigate()

    const handleProductClick = () => {
        if (product.categorie === 'Shoes') {
            navigate(`/MansShoes/${product.id}`)
        } else if (product.categorie === 'Clothes') {
            navigate(`/Clothes/${product.id}`)
        } else if (product.categorie === 'Accesories') {
            navigate(`/Accesories/${product.id}`)
        }
    }

    return (
        <div className='likedProduct'>
            <div className='likedProductContent'>
                <div className='likedProductContentLeft' onClick={handleProductClick}>
                    <center className='pic'>
                        <img src={product.img} alt='Shoe' />
                    </center>
                    <div className='likedProductDescription'>
                        <p>{`${product.brandName} ${product.model}`}</p>
                        {/* <b className='price'>{product.price}</b> */}
                        {product.onSale
                            ?
                            <div className='salePrice'>
                                <p className='oldPrice'>{product.price}</p>
                                <p className='newPrice'>{`${parseInt(product.price) * 0.9} €`}</p>
                            </div>
                            : <b className='price'>{product.price}</b>
                        }
                    </div>
                </div>
                <button className='removeFromLikes' onClick={handleRemoveFromLikesClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default LikedProduct