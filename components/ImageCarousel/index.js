import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'cases/caso1.JPEG',
  'cases/caso2.JPEG',
  'cases/caso3.JPEG',
  'cases/caso4.JPEG',
  'cases/caso5.JPEG',
  'cases/caso5.JPEG',
  'cases/caso1.JPEG',
  'cases/caso2.JPEG',
];

export default function ImageCarousel() {
  return (
    <CarouselSection>
      <StyledSwiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView="auto"
      >
        {images.map((src, index) => (
          <SwiperSlideStyled key={index}>
            <ImageContainer>
              <img src={src} alt={`Caso ${index + 1}`} />
            </ImageContainer>
          </SwiperSlideStyled>
        ))}
      </StyledSwiper>
    </CarouselSection>
  );
}

const CarouselSection = styled.section`
  padding: 4rem 1.5rem;
  background: #f7f7f7;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  max-width: 400px; /* Limite de largura */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
