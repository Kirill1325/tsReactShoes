import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../types/types';

interface ProductItemProps {
    product: IProduct,
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
    isMobile: boolean,
}

function ProductItem({ product, setProducts, isMobile }: ProductItemProps) {

    const [isLiked, setIsLiked] = useState(product.liked);

    const [isShown, setIsShown] = useState(false)

    const HandleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        setProducts(prevProducts =>
            prevProducts.map(p =>
                p.id === product.id
                    ? { ...p, liked: !p.liked }
                    : { ...p }
            )
        )
        setIsLiked((prevIsLiked) => !prevIsLiked)
    }

    useEffect(() => {
        setIsLiked(product.liked)
    }, [isLiked])

    const navigate = useNavigate()

    const url = window.location.href

    const handleProductClick = () => {
        if (url.includes('MansShoes')) {
            navigate(`/MansShoes/${product.id}`)
        } else if (url.includes('Clothes')) {
            navigate(`/Clothes/${product.id}`)
        } else if (url.includes('Accesories')) {
            navigate(`/Accesories/${product.id}`)
        }
    }

    return (

        <div
            className='product'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={handleProductClick}
        >
            <div className='productContent'>
                <center>
                    {isShown ? <img src={product.imgHover} alt='AJ1' /> : <img src={product.img} alt='shoe' />}
                    <div className='likeBtnConteiner'>
                        <button
                            className='likeBtn'
                            onClick={HandleLike}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" fill={isLiked ? "black" : "none"} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </button>
                    </div>
                </center>

                <div className='productDescription'>
                    <p>{`${product.brandName} ${product.model}`}</p>
                    {product.onSale
                        ?
                        <div className='salePrice'>
                            <p className='oldPrice'>{product.price}</p>
                            <p className='newPrice'>{`${parseInt(product.price) * 0.9} €`}</p>
                        </div>
                        : <b className='price'>{product.price}</b>
                    }

                </div>
                {/* {isShown && (
                    <div className='onHover'>
                        <ul className='productItemSizes'>
                            {product.sizes.map((size) => (
                                <li key={size.size}>{size.size}</li>
                            ))}
                        </ul>

                    </div>
                )} */}

            </div>
        </div>
    )
}

export default ProductItem

