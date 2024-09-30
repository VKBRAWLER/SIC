import SlideShow from "@components/SlideShow";

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
    <main>
      <SlideShow image={imageList} ratio="h-auto"/>
      
    </main>
  )
}

export default EventsPage;