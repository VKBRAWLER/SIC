import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section className="bg-green-400 h-96 flex justify-between">
        <div className="flex justify-center items-center flex-col w-1/2 gap-2">
          <h1 className="text-5xl ">TBI GEHU</h1>
          <h3 className="text-2xl">Incubating your dreams into reality</h3>
          <Link href="/" className="bg-green-200 rounded-xl p-2 text-xl font-bold">
            <button>Get Started</button>
          </Link>
        </div>
        <img src="static/img/homeImg.png" className=" " />
      </section>
    </main>
  );
}
