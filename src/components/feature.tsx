/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';

const Feature = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className=" container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-green-600 tracking-widest title-font mb-1 font-bold">Real Solution, Real Fast!</h2>
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">Best Global Logistics Solutions.</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">As one of the leading providers of logistics solutions across the globe, Future Shipping has an immense portfolio of transport and contract logistics solutions that span multiple industries.</p>
    </div>
    <div className='flex flex-row'>
    <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
        <Image
            src="/feature.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        /> <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Fast Service</h1>
            <p className="leading-relaxed mb-3">Our cutting-edge technology and comprehensive network enable us to ensure rapid response times and on-time delivery on par with the industry highest standards.</p>
            <div className="flex items-center flex-wrap">
            <a className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </a>
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
        <Image
            src="/feature2.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        /> <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Safe Delivery</h1>
            <p className="leading-relaxed mb-3">Our team is highly trained and focussed on efficiency and safe delivery and are committed to ensuring every shipment entrusted to Future Cargo Shipping is delivered on time, in a safe and secure manner.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </a>
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
            </div>
          </div>
        </div>
      </div>
    <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
        <Image
            src="/feature3.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        /><div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">24/7 Support</h1>
            <p className="leading-relaxed mb-3">All shipments undertaken by Future Cargo Shipping are backed by a 24/7 support network, providing our customers with a round the clock, efficient back-end service.</p>
            <div className="flex items-center flex-wrap">
            <a className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </a>
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
            </div>
          </div>
        </div>
      </div>
      
      </div>
  </div>
</section>
    </div>
  )
}

export default Feature
