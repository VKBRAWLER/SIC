import { FaInstagram } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from 'next/link';

export const metadata = {
  title: "About | TBI",
  description: "About Technology Business Incubator",
};

const AboutPage = () => {
  return (
    <main>
      <div className='m-10 px-64 mt-20 pb-10 text-center rounded-3xl'>
        <h2 className="text-5xl font-bold">ABOUT US</h2>
        <p className='text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laborum suscipit accusamus ullam quaerat, veritatis libero dolore? Dolorem enim illo sit quas labore recusandae magni quos, ea repellendus accusantium, beatae nihil consequuntur ullam. Tempora necessitatibus eius ipsam omnis alias. Omnis cumque, corporis nesciunt saepe, maiores dignissimos porro asperiores cupiditate itaque nisi neque ipsam voluptate deserunt pariatur quos provident! Totam neque beatae optio, natus labore ratione aut non a veritatis quod consequuntur officiis
          ullam obcaecati perspiciatis explicabo consectetur. Esse voluptates fugit rem, recusandae tempore excepturi ipsa quia non officia incidunt, quae tenetur ab dolorum assumenda nam! Voluptatibus quibusdam architecto fugiat libero rem dolorum laborum praesentium esse? Quas, nesciunt non provident rerum impedit sunt, neque expedita reprehenderit numquam dolorum sed tenetur eos explicabo maiores dignissimos! Similique beatae doloremque doloribus quis, hic aliquid? Quia expedita similique voluptatibus ducimus porro beatae laudantium earum maiores, magnam nihil tenetur delectus culpa possimus ipsum excepturi eligendi, ea necessitatibus.</p>
      </div>
      <div className='flex justify-center gap-24 text-xl'>
        <Link href="https://instagram.com" className='flex items-center gap-1 w-44 justify-center py-2 rounded-3xl bg-[var(--th)] text-white'><FaInstagram className='font-extrabold' /> <span>Instagram</span></Link>
        <Link href="https://youtube.com" className='flex items-center gap-1 w-44 justify-center py-2 rounded-3xl bg-[var(--th)] text-white'><TiSocialYoutube className='font-extrabold' /> <span>Youtube</span></Link>
        <Link href="https://linkedin.com" className='flex items-center gap-1 w-44 justify-center py-2 rounded-3xl bg-[var(--th)] text-white'><TiSocialLinkedin className='font-extrabold' /> <span>LinkedIn</span></Link>
      </div>
    </main>
  )
};

export default AboutPage;