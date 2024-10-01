import SlideShow from "@components/SlideShow";
export const metadata = {
  title: "Events | TBI",
  description: "Events of Technology Business Incubator",
};
const EventsPage = () => {
  const imageList =[
    'static/img/S1.png', 
    'static/img/S2.png', 
    'static/img/S3.png', 
    'static/img/S4.png',
    'static/img/S5.png',
    'static/img/S6.png',
    'static/img/S7.png',
  ]
  return (
    <main className="mt-4">
      <SlideShow image={imageList}/>
      
    </main>
  )
}

export default EventsPage;