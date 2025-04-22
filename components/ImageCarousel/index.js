import { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(null);

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
            <ImageContainer onClick={() => setSelectedImage(src)}>
              <img src={src} alt={`Caso ${index + 1}`} />
            </ImageContainer>
          </SwiperSlideStyled>
        ))}
      </StyledSwiper>

      {selectedImage && (
        <Overlay onClick={() => setSelectedImage(null)}>
          <Modal>
            <img src={selectedImage} alt="Zoom" />
          </Modal>
        </Overlay>
      )}
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Modal = styled.div`
  max-width: 90%;
  max-height: 90%;
  animation: fadeInZoom 0.3s ease;

  img {
  max-height: 90vh; /* 🔥 altura máxima visível */
  max-width: 90vw;
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  object-fit: contain;
  }

  @keyframes fadeInZoom {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;