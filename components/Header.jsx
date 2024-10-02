"use client";
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from '@nextui-org/button';

const Header = () => {
  return (
    <header className="flex h-24 justify-between items-center lg:items-end px-[2em] py-2">
      <Link href={'/'}><img src="static/img/SIC_logo.png" className="h-16 lg:h-20" /></Link>
      <nav className="text-2xl justify-between lg:mb-4 hidden lg:flex lg:gap-10">
        <Link className="hover:underline font-monomedi" href="/about">About</Link>
        <Link className="hover:underline font-monomedi" href="/events">Events</Link>
        <Link className="hover:underline font-monomedi" href="/services">Services</Link>
        <Link className="hover:underline font-monomedi" href="/resources">Resources</Link>
        <Link className="hover:underline font-monomedi" href="/incubation">Incubation</Link>
      </nav>
      <Dropdown backdrop="blur" className='lg:hidden'>
        <DropdownTrigger>
          <Button className='lg:hidden' variant="bordered"><GiHamburgerMenu className="text-5xl lg:hidden" /></Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
          <DropdownItem><Link href="/about">About</Link></DropdownItem>
          <DropdownItem><Link href="/events">Events</Link></DropdownItem>
          <DropdownItem><Link href="/services">Services</Link></DropdownItem>
          <DropdownItem><Link href="/resources">Resources</Link></DropdownItem>
          <DropdownItem><Link href="/incubation">Incubation</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <img src="static/img/geuLogo.png" className="h-20 hidden lg:block" />
    </header>
  )
};

export default Header;