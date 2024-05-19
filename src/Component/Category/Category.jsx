import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div className="container mx-auto px-3 lg:px-12">
      <SectionTitle
        subtitle="From 11:00am to 10:00pm"
        title="ORDER ONLINE"
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="text-4xl text-center uppercase font-medium text-white mr-20 -mt-16">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="text-4xl text-center uppercase font-medium text-white mr-20 -mt-16">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="text-4xl text-center uppercase font-medium text-white mr-20 -mt-16">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="text-4xl text-center uppercase font-medium text-white mr-20 -mt-16">
            Deserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="text-4xl text-center uppercase font-medium text-white mr-20 -mt-16">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
