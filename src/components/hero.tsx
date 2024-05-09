/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <p className=" leading-relaxed text-2xl font-medium text-gray-900 mb-3 ml-8">LOGISTIC</p>
      <h1 className="title-font  text-7xl ml-6 mb-4 font-medium text-gray-900">Best Shipping
        <br className="hidden lg:inline-block"/>
           <h1 className='font-extra-bold text-yellow-500 '>Partner</h1>
      </h1>
      <p className="mb-8 leading-relaxed text-1xl font-medium ml-6">Guaranteed by more than a hundred awards, to provide wide range best service.</p>
      <div className="flex justify-center">
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 ... inline-flex text-white bg-yellow-500 border-0 py-4 px-14 ml-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">DISCOVER MORE</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
            src="/banner.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        />
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
