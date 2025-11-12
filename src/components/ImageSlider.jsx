import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
export default function ImageSlider() {
  return (
    <div className='pt-4 relative z-1'>
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={"auto"}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide className='h-[40vf]'>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}
