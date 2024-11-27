import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Testimonial() {
  const testimonials = [
    { name: "John Doe", feedback: "Joel is amazing to work with!" },
    { name: "Jane Smith", feedback: "Great solutions delivered on time." },
  ];

  return (
    <section>
      <h2>Testimonials</h2>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {testimonials.map((test, index) => (
          <SwiperSlide key={index}>
            <blockquote>
              <p>{test.feedback}</p>
              <footer>- {test.name}</footer>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
