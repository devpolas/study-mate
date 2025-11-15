import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import SlideCard from "./SlideCard";

const data = [
  {
    id: 1,
    title: "All kind of academic solution",
    image: "https://i.ibb.co.com/jv3HZDd8/1.webp",
    description:
      "You can get all solution with one Platform and different mates! tutorials support any where any time",
  },
  {
    id: 2,
    title: "All subjects tutorials, Notes",
    image: "https://i.ibb.co.com/fG1ySqBt/2.webp",
    description:
      "Find solution with video tutorials and support any where any time. one Platform and different mates!",
  },
  {
    id: 3,
    title: "Enjoy your study journey with friends",
    image: "https://i.ibb.co.com/v4ry9Mqf/3.webp",
    description:
      "Study make some fun by you with yours friends and communicate friends",
  },
  {
    id: 4,
    title: "All subjects tutorials, Notes",
    image: "https://i.ibb.co.com/fG1ySqBt/2.webp",
    description:
      "Find solution with video tutorials and support any where any time. one Platform and different mates!",
  },
];

export default function ImageSlider() {
  return (
    <div className='pt-4 relative z-1 flex justify-center items-center'>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={"auto"}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        speed={3000}
        loop={true}
        allowTouchMove
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1536: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideCard key={item.id} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
