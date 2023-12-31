'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typed from 'react-typed';

export default function Home() {
    return (
        
        <>
            {/* Hero Section */}
            <section id="home" className="max-h-screen mb-10 mt-44">
                <div className="container text-white">
                    <div className="flex flex-wrap md:grid md:grid-cols-2">
                        <div className="self-center w-full px-4">
                            <h1 
                                className="text-4xl font-bold md:text-4xl lg:text-6xl"
                            >
                                Hello, I'm {' '}
                            </h1>
                            <h1 className="text-4xl font-bold md:text-4xl lg:text-6xl">
                            <Typed
                                strings={['Reza Fazriansyah']}
                                typeSpeed={50}
                            />
                            </h1>
                            <h2 className="mb-5 text-lg font-medium">Students</h2>
                            <p className="mb-10 text-lg font-medium md:text-2xl">Interested in Learning Programming</p>
                            <Link href="/contact" className='font-medium bg-[#2b2b2b] px-8 py-3 text-white rounded-full hover:shadow-md hover:bg-[#808080] transition duration-300'>Contact Me</Link>
                        </div>
                        <div className="flex justify-center w-full px-4">
                            <div className="mt-10 text-center">
                                <Image src="/images/reza.jpg" alt="me" width="300" height="300" className='rounded-full'/>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
        </>
    );
}