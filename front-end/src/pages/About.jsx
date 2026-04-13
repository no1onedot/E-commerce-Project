import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus sint sapiente maxime laudantium nemo neque dolores ratione labore perferendis dicta quaerat incidunt, soluta minima iure quia placeat dolorem. Harum velit aliquam consequatur quod molestiae enim aspernatur culpa eius odit tenetur numquam atque ex ea, quia unde quam! Fugiat eum a, deserunt consequatur aliquid eaque repellendus beatae iste! Ex officiis tenetur, distinctio amet tempore corrupti molestias perferendis cum fuga iure qui voluptate fugit non reiciendis quod eum, inventore culpa minus, cupiditate id libero neque ipsam officia in. Sapiente praesentium incidunt, delectus libero voluptate molestiae? Quod fugit pariatur minus dignissimos veritatis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum laudantium consequuntur quod at eveniet nesciunt quae velit dolor deleniti, rem ullam veritatis odit quos ab amet ut. Error est in et temporibus minus possimus maxime, magni perspiciatis eaque quidem illo odio omnis consectetur voluptate repudiandae, eum deleniti. Ipsa, porro? Veritatis nisi consequuntur quos est illo aut quisquam, natus ad.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas consectetur iure alias nostrum, vero quo possimus quisquam perspiciatis sit saepe aperiam debitis quos excepturi tenetur ipsa omnis! Nisi inventore porro neque reiciendis at culpa corrupti nesciunt quia nostrum. Dolorem, amet.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>Quality Assurance :</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ad cupiditate enim soluta nesciunt expedita. Ipsa, distinctio voluptas quis cumque libero numquam totam. Dolorem, blanditiis.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>Convenience :</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ad cupiditate enim soluta nesciunt expedita. Ipsa, distinctio voluptas quis cumque libero numquam totam. Dolorem, blanditiis.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>Exceptional Customer Service :</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ad cupiditate enim soluta nesciunt expedita. Ipsa, distinctio voluptas quis cumque libero numquam totam. Dolorem, blanditiis.</p>

        </div>

      </div>
      <NewsLetterBox/>

    </div>
  )
}

export default About