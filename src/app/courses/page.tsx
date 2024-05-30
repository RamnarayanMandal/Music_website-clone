"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../component/ui/3d-card";
import Link from "next/link";
import courses from '../data/music_course.json';

const page = () => {
  return (
    <div className='min-h-screen bg-black py-12 pt-36'>
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All courses ( {courses.courses.length})
      </h1>

      <div className='flex flex-wrap justify-center items-center content-center gap-8'>
        {courses?.courses?.map((item, index) => (
          <div key={index} className='w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] lg:px-0 md:px-0 px-5'>
            <CardContainer className="inter-var ">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border mb-8">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={item.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://github.com/RamnarayanMandal"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
