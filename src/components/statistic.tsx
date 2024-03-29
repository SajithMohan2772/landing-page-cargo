/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { LuUserSquare2, LuPackageCheck } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";


const Statistic = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
  <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">STATISTICS</h1>
  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Company statistics counts on a website showcase financial health, operational efficiency, and market presence, using infographics, interactive dashboards, or data tables for clear, engaging presentation.</p>
  </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-8 border-gray-600 px-4 py-6 rounded-lg">
          
          <div className='flex justify-center'>
          <LuPackageCheck size="64" />
          </div>
          <h2 className="title-font font-medium text-3xl text-gray-900" >2.7K</h2>
          <p className="leading-relaxed">Deliverd Pakages</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-8 border-gray-600 px-4 py-6 rounded-lg">
        
          <div className='flex justify-center'>
          <BsGlobe2 size="64" />
          </div>
          <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p className="leading-relaxed">Countries coverd</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-8 border-gray-600 px-4 py-6 rounded-lg">
       
          <div className='flex justify-center'>
            <TbTruckDelivery  size="64" />
          </div>
          <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
          <p className="leading-relaxed">Tons of goods</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-8 border-gray-600 px-4 py-6 rounded-lg">
          
          <div className='flex justify-center'>
          <LuUserSquare2 size="64" />
          </div>
          <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
          <p className="leading-relaxed">Satidfied coustmour</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Statistic
