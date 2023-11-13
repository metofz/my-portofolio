'use client'

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-elastic-carousel";

const Page = () => {
    return (
        <>
            <div className="container pt-4 text-white mt-20">
                <div className="">
                    <Link href="/projects" className="text-lg text-left hover:border-b-2 white">Back</Link>
                    <h1 className='text-2xl font-semibold text-center'>Project III</h1>
                </div>
                <div className='w-16 px-4 mx-auto mb-10 border-t-2 border-white'></div>

                {/* Carousel */}
                <div className="grid md:grid-cols-3 bg-[#161616] rounded-lg">
                    <Carousel className="col-span-2">
                        <Image src="/images/band/band1.jpg" width={1000} height={300} alt="photo"/>
                        <Image src="/images/band/band2.jpg" width={1000} height={300} alt="photo"/>
                        <Image src="/images/band/band3.jpg" width={1000} height={300} alt="photo"/>
                    </Carousel>

                    {/* Detail Project */}
                    <div className="p-6 md:pt-24 text-left">
                        <h1 className="mb-5 text-xl font-semibold">Project Info</h1>
                        <h2 className="">Project Name: Band Lirik</h2>
                        <h2 className="">Build with: Laravel, Bootstrap, MySQL</h2>
                        <h2 className="">Year: 2023</h2>
                        <h2 className="">Development Time: - Days</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page