import React from 'react'

const Header = () => {
  return (
    <div>
       <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 ml-6 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-2 text-xl">Cargo</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray- 900 font-bold mx-10">HOME</a>
      <a className="mr-5 hover:text-gray- 900 font-bold mx-10">PAGES</a>
      <a className="mr-5 hover:text-gray- 900 font-bold mx-10">TRACKING</a>
      <a className="mr-5 hover:text-gray- 900 font-bold mx-10">SERVICES</a>
      <a className="mr-5 hover:text-gray- 900 font-bold mx-10">BLOG</a>
    </nav>
    <button className="inline-flex items-center bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-none mt-4 ml-5 mr-5 md:mt-0"><a className='text-white font-semibold font-lg mr-2'>GET A QUOTE</a>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    <br/>
    <button className="inline-flex items-center bg-black border-0 py-3 px-5 focus:outline-none hover:bg-gray-500 rounded-none  mt-4 mx-5 md:mt-0"><a className='text-white font-semibold font-lg mr-2'>SIGN IN </a>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Header
