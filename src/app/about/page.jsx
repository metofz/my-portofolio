import Image from "next/image";

export default function About() {
    return (
        <>
            {/* About Me */}
            <div className="container pt-4 mt-20 text-center text-white">
                <div className="mb-2">
                    <h1 className='text-2xl font-semibold text-center'>About Me</h1>
                </div>
                <div className='w-16 px-4 mx-auto mb-5 border-t-2 border-white'></div>

                <div className="w-full px-4 mb-8">
                    <div className="flex justify-center text-center">
                        <Image src="/images/reza.jpg" alt="me" width="150" height="150" className='rounded-full'/>
                    </div>
                    <h1 className="text-2xl font-semibold">Reza Fazriansyah</h1>
                    <p className="block">Web Developer</p>
                </div>

                <div className="mb-20">
                    <div className="self-center w-full mb-4 text-base">
                        <p className='text-center'>I am a student at pamulang university, daily activity is learning programming. I like learning about new things and I also like playing games.
                        In programming I still have a lot to learn and be more active and the programming language I usually use is php with the laravel framework. In the future, maybe I will learn more programming languages and create more projects to practice my coding skills.
                        </p>

                        <p className="mt-20 font-bold text-left">Skills : PHP, Laravel, Tailwind CSS, MySQL, NEXT JS</p>
                    </div>
                </div>
            </div>
        </>
    )
}