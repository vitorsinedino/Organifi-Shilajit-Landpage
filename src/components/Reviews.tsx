import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import StarRating from './StarRating';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef, useState } from 'react';

function Reviews() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [, setInit] = useState<boolean>(false);

  const reviews = [
    {
      score: 5,
      title: 'Easy',
      text: "One of the easiest ways to take shilajit Will get this again",
      user: "Richard A.",
      verified: true
    },
    {
      score: 5,
      title: 'Worth a try',
      text: "The first few gummies were horrible tasting… just like most shilajit . However, one does get use to the taste very quickly...",
      user: "Kathryn",
      verified: false
    },
    {
      score: 5,
      title: 'Unique',
      text: "Not the best taste but the benefit is there. Team gum drop!",
      user: "Amy P.",
      verified: true
    },
    {
      score: 5,
      title: 'Love these!',
      text: "Use these before a workout and love the way they make me feel. Also the taste is way better than any shilajit product I’ve had in the past.",
      user: "Tammy T.",
      verified: true
    }
  ]

  return (
    <div className="section" id="reviews">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">
            We Recently Launched These <span className='section-title-rainbow'>Shilajit Gummies</span> & Some Early Reviews Have Already Come In…
          </h1>
        </div>
      </div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        modules={[Navigation, Pagination, A11y]}
        className="reviewsSwiper"
        onInit={() => setInit(true)}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={`card review-card review-card-${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="card-body">
                <StarRating value={review.score} readOnly ariaLabel="Read-only rating" />
                <div className="card-title">
                  {review.title}
                </div>
                <p className="card-text">
                  {review.text}
                </p>
                <div className="review-author">
                  <img src="https://placehold.co/64x48" alt="" />
                  <div className="review-author-info">
                    <div className="review-author-name">
                      {review.user}
                    </div>
                    {review.verified && (
                      <div className="review-author-verified">
                        Verified Buyer
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
        )}
        <div className="swiper-custom-buttons">
          <button type='button' title='Swiper Navigation Left Button' className="swiper-custom-left"
            ref={prevRef}>
            <BsArrowLeft />
          </button>
          <div className='swiper-custom-pagination' ref={paginationRef}></div>
          <button type='button' title='Swiper Navigation Right Button' className="swiper-custom-right" ref={nextRef}>
            <BsArrowRight />
          </button>
          <a className="readAll">
            Read All
          </a>
        </div>
      </Swiper>
    </div>
  );
}

export default Reviews;