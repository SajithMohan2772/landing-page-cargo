/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';

const Content = () => {
  return (
    <><div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pb-0">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src="/content2.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="text-xs text-green-600 tracking-widest title-font mb-1 font-bold uppercase">We Provide Service Across The Globe</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold">
              TransMax Logistics Around
              <br className="hidden text-inline" />
              <h1 className='text-orange-700 font-bold'>the World</h1>
            </h1>
            <p className="mb-8 leading-relaxed text-lg font-semibold">Tansmax is the world's driving worrldwide coordinations supplier - we supply uphold industry and exchange the worldwide trade of merchandise through land transport</p>
            <p className="mb-8 leading-relaxed text-base font-medium">Our worth added addmistration guaratee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress</p>
            <div className="flex justify-center">
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 ... inline-flex text-teal-600 bg-gray-300 border-0 py-3 px-10 focus:outline-none hover:bg-gray-500 rounded text-based font-bold">MORE ABOUT US</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <section className="text-gray-600 body-font rounded-lg ">
      <div className='flex felx-row'>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">We Use AI In The Line</h2>
                <p className="leading-relaxed text-base">That’s why customers trust us — we have more than 20 years of experience in the logistics and transportation.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Smart Warehouse</h2>
                <p className="leading-relaxed text-base">That’s why customers trust us — we have more than 20 years of experience in the logistics and transportation.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">100% Accuracy</h2>
                <p className="leading-relaxed text-base">That’s why customers trust us — we have more than 20 years of experience in the logistics and transportation.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap pt-0">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500"/>
            </div>
        </div>
        </div>
      </section> */}
      </>

  )
}

export default Content
