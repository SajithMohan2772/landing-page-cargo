/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <p className="text-xs text-gray-600 tracking-widest title-font mb-1 font-semibold ">WHAT THEY SAY</p>
    <h1 className="text-3xl font-bold title-font text-gray-900 mb-12 text-center uppercase">Client’s Testimonial</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our commitment to sustainability helps us reduce waste and share the benefits with our customers. It permeates the way we do business, driving us to innovate.</p>
    </div>
    <div className="flex flex-row -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
          <Image
            src="/user.jpg"
            alt="user"
            width={720}
            height={600}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
        />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
          <Image
            src="/user2.jpg"
            alt="user"
            width={720}
            height={600}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
        />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
    <div className="accordion">
      
        <div className="border-b border-gray-200 mb-2">
            <input type="checkbox" id="faq1" className="hidden" />
            <label htmlFor="faq1" className="flex justify-between items-center cursor-pointer">
                <span className="text-lg font-semibold">Question 1?</span>
                <button className="focus:outline-none">
                    <svg className="w-6 h-6 fill-current text-gray-500 transition-transform transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 15l-1.414-1.414L7 15.172l-1.414-1.414L12 10.344l5.414 3.414L17 15.172 13.414 13.586 12 15z" />
                    </svg>
                </button>
            </label>
            <div className="overflow-hidden transition-max-height ease-out max-h-0">
                <p className="text-gray-600 mt-2">Answer to question 1.</p>
            </div>
        </div>
        
        <div className="border-b border-gray-200 mb-2">
            <input type="checkbox" id="faq2" className="hidden" />
            <label htmlFor="faq2" className="flex justify-between items-center cursor-pointer">
                <span className="text-lg font-semibold">Question 2?</span>
                <button className="focus:outline-none">
                    <svg className="w-6 h-6 fill-current text-gray-500 transition-transform transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 15l-1.414-1.414L7 15.172l-1.414-1.414L12 10.344l5.414 3.414L17 15.172 13.414 13.586 12 15z" />
                    </svg>
                </button>
            </label>
            <div className="overflow-hidden transition-max-height ease-out max-h-0">
                <p className="text-gray-600 mt-2">Answer to question 2.</p>
            </div>
        </div>
    </div>
</div>

  </div>
</section>
    </div>
  )
}

export default Testimonial
