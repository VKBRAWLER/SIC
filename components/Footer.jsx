import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className="min-h-32 h-fit py-10 px-2 relative text-sm sm:text-xl lg:px-28 w-full bg-[var(--th)] text-white">
        <div className="grid md:grid-cols-3 w-full">
            <div>
                <h2 className="text-lg sm:text-2xl font-bold">Redirect Pages</h2>
                <ul className="mx-5">
                    <li className='cursor-pointer'><Link href="/about">About</Link></li>
                    <li className='cursor-pointer'><Link href="/events">Events</Link></li>
                    <li className='cursor-pointer'><Link href="/services">Services</Link></li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg sm:text-2xl font-bold text-right md:text-left">Contact Us</h2>
                <ul className="mx-5 text-right md:text-left">
                    <li>+91 8360421711</li>
                    <li>+91 8360421711</li>
                    <li>example123@gmail.com</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg sm:text-2xl font-bold">External Sources</h2>
                <ul className="mx-5 ">
                    <li>https://github.com/VKbrawler</li>
                    <li>https://www.gehu.ac.in</li>
                    <li>varunkh12345@gmail.com</li>
                </ul>
            </div>
        </div>
        <h6 className="text-center italic absolute bottom-1 right-4 text-sm">@Copyright-SIC 2024</h6>
    </footer>
  )
}

export default Footer;