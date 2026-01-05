import { type CSSProperties, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import type { Swiper as SwiperClass } from 'swiper';

function Gallery({ images }: { images: any[] }) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [, setInit] = useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const swiperStyle = useMemo(() => {
    // React.CSSProperties doesn't include CSS variables by default
    return {
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    } as CSSProperties;
  }, []);

  const slides = images.map((image, index) => (
    <SwiperSlide key={index}>
      <img src={image.src} alt={`Gallery image ${index + 1}`}  loading="lazy" decoding="async"/>
    </SwiperSlide>
  ))

  return (
    <>
      <Swiper
        style={swiperStyle}
        loop={true}
        spaceBetween={10}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
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
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
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