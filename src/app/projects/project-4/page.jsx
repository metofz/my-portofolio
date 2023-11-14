'use client'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Page = () => {
    return (
        <>
            <div className="container pt-4 mt-20 text-white">
                <div className="">
                    <Link href="/projects" className="text-lg text-left hover:border-b-2 white">Back</Link>
                    <h1 className='text-2xl font-semibold text-center'>Project IV</h1>
                </div>
                <div className='w-16 px-4 mx-auto mb-10 border-t-2 border-white'></div>

                {/* Carousel */}
                <div className="block md:grid md:grid-cols-3 bg-[#161616] rounded-lg w-full">
                    <div className="col-span-2">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide><Image src="/images/anime/anime1.jpg" alt="photo" width={1000} height={450}/></SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Detail Project */}
                    <div className="p-6 text-left md:pt-24">
                        <h1 className="mb-5 text-xl font-semibold">Project Info</h1>
                        <h2 className="">Project Name: Anime List</h2>
                        <h2 className="">Build with: NEXT JS, Tailwind CSS, Jikan API</h2>
                        <h2 className="">Year: 2023</h2>
                        <h2 className="">Development Time: On Progress</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page