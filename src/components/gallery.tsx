/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h2 className="text-xs text-gray-600 tracking-widest title-font mb-1 font-semibold uppercase">news & events</h2>
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">CURRENT NEWS</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="flex flex-wrap -m-4 ">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative rounded-md">
        <Image
            src="/gallery2.jpeg"
            alt="Description of the image"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center" 
        />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase">Road Transport</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Temperature / Transport</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative rounded-md">
        <Image
            src="/gallery3.jpeg"
            alt="Description of the image"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center" 
        />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">FBA DELIVERY SERVICE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">FBA / Logistics</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative rounded-md">
        <Image
            src="/gallery4.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center" 
        />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">OCEAN SERVICE TI CLIENTS</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ocean / Ships</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative rounded-md">
        <Image
            src="/gallery.jpeg"
            alt="Description of the image"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center" 
        />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">REGION DISTRIBUTION CENTER</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Distribution / system</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative rounded-md">
        <Image
            src="/gallery5.jpeg"
            alt="Description of the image"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center" 
        />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase">Rocket</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Logistic / Rocket</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative rounded-md">
        <Image
            src="/gallery6.jpeg"
            alt="Description of the image"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center" 
        />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase">Project Cost Estimation</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Budget / Cost</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery
