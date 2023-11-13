"use client";
import React from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedInIcon from "../../../public/linkedin.svg";
import InstagramIcon from "../../../public/instagram.svg";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form request for sending data to the server
        const options = {
            // The method is POST because we are sending data
            method: 'POST',
            // Tell the server we're sending JSON
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);
        if(response.status === 200){
            console.log('Message sent.');
        }
    }
    return(
        <>
            {/* Contact */}
            <section id='project'>
                <div className="container pt-4 mt-20 text-center text-white">
                    <div className="mb-2">
                        <h1 className='text-2xl font-semibold text-center'>Contact Me</h1>
                    </div>
                    <div className='w-16 px-4 mx-auto mb-4 border-t-2 border-white'></div>

                    <div className="grid gap-4 py-20 text-left md:grid-cols-2">
                        <div className="mb-5">
                            <h1 className="text-xl font-bold">Let's Connect</h1>
                            <p className="max-w-md">I'm currently looking for new opportunities, my inbox is always open. Wether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                            <div className="flex flex-row gap-2 mt-4 socials">
                                <Link href="https://github.com/metofz" target="_blank" className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                                    <Image src={GithubIcon} alt="Github Icon" width={40}/>
                                </Link>
                                <Link href="https://www.linkedin.com/in/reza-fazriansyah-525544252" target="_blank" className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                                    <Image src={LinkedInIcon} alt="LinkedIn Icon" width={40}/>
                                </Link>
                                <Link href="https://www.instagram.com/rezafazriansyah/" target="_blank" className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                                    <Image src={InstagramIcon} alt="Instagram Icon" width={40} className="text-center"/>
                                </Link>
                            </div> 
                        </div>
                        <div>
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <label 
                                    htmlFor="email" 
                                    className="block text-lg font-medium text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    name="email" 
                                    type="email" 
                                    id="email" 
                                    required 
                                    placeholder="example@gmail.com" 
                                    className="p-2 rounded-md bg-dark" 
                                />
                                <label 
                                    htmlFor="email" 
                                    className="block text-lg font-medium text-white"
                                >
                                    Subject
                                </label>
                                <input 
                                    name="subject"
                                    type="text" 
                                    id="subject" 
                                    required 
                                    placeholder="Just saying hi" 
                                    className="p-2 rounded-md bg-dark" 
                                />
                                <label 
                                    htmlFor="message" 
                                    className="block text-lg font-medium text-white"
                                >
                                    Message
                                </label>
                                <textarea 
                                    name="message"
                                    type="textarea" 
                                    id="message" 
                                    required 
                                    placeholder="Let's talk about..." 
                                    className="p-2 rounded-md bg-dark" 
                                    aria-rowcount={2}
                                />
                                <button 
                                    type="submit"
                                    className="bg-white p-2 text-dark rounded-md mt-2 hover:font-semibold hover:bg-[#161616] hover:text-white"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}