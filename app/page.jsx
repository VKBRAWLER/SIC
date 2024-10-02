import ServiceBox from "@components/ServiceBox";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <section className="h-[80vh] flex justify-center flex-col lg:flex-row lg:justify-around py-5 pl-[4vw] rounded-2xl m-10">
        <div className="flex justify-center items-center lg:items-start flex-col lg:w-1/2">
          <h1 className="text-5xl lg:text-[6vw] font-monobold">SIC GEHU</h1>
          <h3 className="text-2xl">Incubating your dreams into reality</h3>
          <Link href="/events" className="bg-[var(--th)] text-white rounded-full py-4 px-6 text-xl font-bold flex justify-center items-center gap-3 w-52 mt-7">
            <button>Get Started</button> <FaArrowRightLong />
          </Link>
        </div>
        <img src="static/img/homeImg.png" className="hidden lg:block" />
      </section>
      <ServiceBox />
    </main>
  );
};