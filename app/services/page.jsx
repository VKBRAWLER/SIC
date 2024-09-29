
const ServicesPage = () => {
  const servicesData = [
    "Skill dev & Intership",
    "Extensive Resources",
    "Innovation and Support",
    "Community and Network",
  ];
  return (
    <section className="flex justify-evenly bg-blue-400 h-[700px] py-20">
    {servicesData.map((topic, index) => (
      <div key={index} className="w-1/5 bg-blue-300 flex">
        <h1 className="text-xl text-center w-full font-semibold">{topic}</h1>
      </div>
    ))}
    </section>
  )
}

export default ServicesPage;