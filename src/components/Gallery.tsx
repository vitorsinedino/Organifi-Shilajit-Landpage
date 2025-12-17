import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function Gallery({ images }: { images: string[] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = images.map((image, index) => (
    <SwiperSlide key={index}>
      <img src={image.src} />
    </SwiperSlide>
  ))

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper"
        onInit={() => setInit(true)}
      >
        {slides}
      </Swiper>
      <div className="swiper-custom-buttons">
        <button type='button' title='Swiper Navigation Left Button' className="swiper-custom-left"
          ref={prevRef}>
          <BsArrowLeft />
        </button>
        <Swiper
          onSwiper={setThumbsSwiper}
          onInit={() => setInit(true)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbSwiper"
        >
          {slides}
        </Swiper>
        <button type='button' title='Swiper Navigation Right Button' className="swiper-custom-right" ref={nextRef}>
          <BsArrowRight />
        </button>
      </div>
    </>
  );
}

export default Gallery;