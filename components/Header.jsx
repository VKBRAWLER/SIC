import Link from 'next/link';
const Header = () => {
  return (
    <header className="flex h-24 bg-gray-300 justify-between items-center px-2 py-2">
        <Link href={'/'}><img src="static/img/tbiLogo.png" className="h-20" /></Link>
      <nav className="flex w-3/6 text-2xl justify-between">
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/services">Services</Link>
      </nav>
        <img src="static/img/geuLogo.png" className="h-20" />
    </header>
  );
};

export default Header;