import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <div style={{ 
      backgroundImage: `url("/banner.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-bold text-3xl text-gray-900">Subscribe to newsletter</h1>
            <p className="leading-relaxed font-semibold mt-4 mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
            <br className="hidden lg:inline-block"/>
            <h1 className='font-semibold mt-0'> there live the blind texts</h1>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Enter your Email here</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-600 text-base outline-none text-gray-700 py-1 px-5 mr-0 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-600 border-0 py-2 px-8 ml-0 focus:outline-none hover:bg-red-700 rounded">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
