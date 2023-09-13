import styled from 'styled-components';
import {Swiper} from 'swiper/react';
import {COLORS} from "../../constants";
export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  outline: none;
  height: 430px;
  border: 1px solid ${COLORS.BLUE};
`;

export const Title = styled.p`
 font-weight: 600;
  font-size: 2.125rem;

  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
    margin: 10px 0;
  }
`;

export const SubText = styled.p`
 font-weight: 600;
  margin: 10px 0;
  font-size: 1.5rem;

  @media screen and (max-width: 440px) {
    display:none;
  }
`;
export const SwiperStyles = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
    padding: 20px !important
  }

  .swiper-slide {
    font-size: 18px;
    text-align: -webkit-center;
    align-items: center;

  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .bs-icons {
    display: flex;
    gap: 20px;
  }

  .pagination-slide {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .pagination-slide .swiper-paginations {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .bs-icons {
      font-size: 20px;
      gap: 15px;
    }
    .pagination-slide .swiper-paginations {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  @media (max-width: 305px) {
    .bs-icons {
      font-size: 16px;
      gap: 10px;
    }

    .pagination-slide .swiper-paginations {
      font-size: 14px;
      margin-right: 8px;
    }
  }

`;
