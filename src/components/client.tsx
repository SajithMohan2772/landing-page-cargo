/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';

const Client = () => {
  return (
    <section id="clients" className="clients bg-gray-100 py-10">
      <div className="container mx-auto" data-aos="zoom-in">
        <h3 className="title text-center font-bold text-3xl mb-6 text-gray-800 uppercase">Our Clients</h3>
        <p className="description text-center text-gray-600 mb-8">We've worked with the best businesses over a wide range of industries, bringing ideas to implementation</p>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-1/6 p-4">
          <Image
            src="/client5.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        />
          </div>
          <div className="w-1/6 p-4">
          <Image
            src="/client.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        />
          </div>
          <div className="w-1/6 p-4">
          <Image
            src="/client2.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        />
          </div>
          <div className="w-1/6 p-4">
          <Image
            src="/client3.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        />
          </div>
          <div className="w-1/6 p-4">
          <Image
            src="/client4.jpg"
            alt="Description of the image"
            width={720}
            height={600}
            className="rounded-lg shadow-md"
        />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Client
