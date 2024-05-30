'use client'

import Link from 'next/link';
import React from 'react';
import img from '../../Image/violin-156558_1280.png'
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: 'Understanding Music Theory',
    description:
      'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    link:'/',  
    slug: 'understanding-music-theory',
    isFeatured: true,
  },
  {
    title: 'The Art of Songwriting',
    description:
      'Learn the craft of songwriting from experienced musicians and songwriters.',
      link:'/',
    slug: 'the-art-of-songwriting',
    isFeatured: true,
  },
  {
    title: 'Mastering Your Instrument',
    description:
      'Advanced techniques to master your musical instrument of choice.',
      link:'/',
    slug: 'mastering-your-instrument',
    isFeatured: true,
  },
  {
    title: 'Music Production Essentials',
    description:
      'Get started with music production with this comprehensive overview.',
      link:'/',
    slug: 'music-production-essentials',
    isFeatured: true,
  },
  {
    title: 'Live Performance Techniques',
    description:
      'Enhance your live performance skills with expert tips and strategies.',
      link:'/',
    slug: 'live-performance-techniques',
    isFeatured: true,
  },
  {
    title: 'Digital Music Marketing',
    description:
      'Learn how to promote your music effectively in the digital age.',
      link:'/',
    slug: 'digital-music-marketing',
    isFeatured: true,
  },
];

const UpcomingWebinars = () => {

  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
          <p className='my-10 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
        </div>
      </div>
      <div className='px-10'>
        <HoverEffect items={featuredWebinars} />
      </div>
      <div className='text-center'>
        <Link href='/courses'>
          <button className='p-[3px] relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
            <div className='px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent'>
              <p className='font-semibold text-lg'>View All Webinars</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
