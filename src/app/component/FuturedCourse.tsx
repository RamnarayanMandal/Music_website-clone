'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import courseData from '../data/music_course.json';
import { BackgroundGradient } from './ui/background-gradient';
import courseImg from '../../Image/violin-33610_1280.png';

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourse = () => {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase '>FEATURED COURSES</h2>
          <p className='my-10 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className='flex justify-center px-5'>
              <BackgroundGradient className='rounded-[22px] max-w-sm  bg-white dark:bg-zinc-900'>
                <div className='p-4 sm:p-6 flex flex-col items-center flex-grow text-center'>
                  <Image src={courseImg} alt={course.title} height={400} width={400} className='object-contain' />
                  <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                  <p className='text-sm text-neutral-200 dark:text-neutral-400 flex-grow'>{course.description}</p>
                  <Link href={`/courses/${course.slug}`} className='mt-5'>
                    <button className='px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500'>
                      Learn More
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 text-center'>
        <Link href='/courses'>
          <button className='p-[3px] relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
            <div className='px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent'>
              <p className='font-semibold text-lg'>View All Courses</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourse;