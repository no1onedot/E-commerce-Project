import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);



        return null;
      }
    })
  }
  useEffect(() => {
    fetchProductData();
  }, [productId, products])
  return productData ? (
    <div className='border-t-2 pt-10  transition-opacity ease-in duration-500 opacity-100'>
      {/*---------------------------------------------- Product Data -------------------------------------------------------------  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*---------------------------------------------- Product Image ----------------------------------------------------------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify -between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, idx) => (

                <img onClick={() => setImage(item)} src={item} key={idx} className='w-[24%] sm:w-full flex-shrink-0 cursor-pointer mb-1 sm:mb-3' alt='' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt='' />
          </div>
        </div>

        {/* ---------------------------------------------------- Product Info ------------------------------------------------- */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {[...productData.sizes]
                .sort((a, b) => ["S", "M", "L", "XL" ,"XXL"].indexOf(a) - ["S", "M", "L", "XL","XXL"].indexOf(b))
                .map((item, idx) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${item == size ? 'border-orange-500' : ''}`}
                    key={idx}
                  >
                    {item}
                  </button>
                ))}
            </div>

          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash od delivery is available on this product.</p>
            <p>Easy return & exchange policy with in 7 days</p>
          </div>
        </div>
      </div>
      {/*  ------------------Description and Review section ---------------------------------------------------------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm '> Description</b>
          <p className='border px-5 py-3 text-sm '> Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4  border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti esse sapiente harum aliquam, suscipit sit facilis omnis maiores, ut vitae veritatis dolore doloribus assumenda. Odit praesentium magnam cum aliquid explicabo officia natus soluta numquam mollitia voluptates aut enim dolor cumque, reiciendis distinctio eius nobis inventore nihil atque repudiandae fugiat tenetur ducimus ullam! Consectetur voluptas recusandae optio, iusto nesciunt porro voluptates asperiores laborum beatae non voluptate veniam, quo commodi a minima. Aut odit, libero animi facilis dolore neque cumque illo. Libero sint tempore omnis repellat neque doloribus fugit. Quis, nobis soluta autem laudantium sapiente nemo facilis amet aperiam beatae velit in?</p>
          <p>Lorem ipsum dolor sit amMagni hic veniam nihil iste, eligendi temporibus velit vitae, possimus necessitatibus excepturi fugiat laudantium omnis et, impedit distinctio iure maxime! Dolores magnam et quo pariatur dignissimos odit sunt numquam molestiae veritatis dolor deleniti praesentium fuga, mollitia inventore consequatur ratione laudantium officia voluptas. Unde, magni obcaecati alias officia tenetur id eveniet modi eaque nobis nulla expedita temporibus dolor eius ratione et. Dolore ad porro voluptate nostrum? At nam aut in facere doloremque, nihil soluta ducimus optio quas mollitia voluptatibus reprehenderit hic, ipsam et quos, magni qui esse exercitationem maxime debitis culpa cum. Vitae!</p>
        </div>
      </div>
      {/* ---------------------------------display related products ---------------------------------------------------------- */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product