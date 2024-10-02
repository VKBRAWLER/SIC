const ServiceBox = () => {
  const servicesData = [
    "Skill dev & Intership",
    "Extensive Resources",
    "Innovation and Support",
    "Community and Network",
  ];
  return (
    <>
      <h2 className="text-5xl text-center font-bold mt-20">OUR SERVICES</h2>
      <section className="flex justify-center min-h-[700px] py-20 flex-wrap gap-10 mb-20">
      {servicesData.map((topic, index) => (
      <div
      key={index}
      className="bg-gray-300 flex rounded-2xl bg-cover bg-center relative overflow-hidden w-96 h-[500px]"
      style={{ backgroundImage: `url(/static/img/event/${index + 1}.jpg)` }}
      >
      <h3 className="text-2xl text-center w-full font-semibold absolute bottom-0 text-white backdrop-blur-lg p-3">{topic}</h3>
      </div>
      ))}
      </section>
  </>
  )
};

export default ServiceBox;