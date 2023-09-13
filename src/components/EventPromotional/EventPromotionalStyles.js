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
  font-weight: 400;
  margin: 10px 0;

  @media screen and (max-width: 440px) {
    display:none;
  }
`;
export const SwiperStyles = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
    padding: 20px !important;
  }

  .swiper-slide {
    font-size: 18px;
    text-align: -webkit-center;
    align-items: center;
    background-color: ${COLORS.BLUE};

  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination{
    margin-top: 20px;
    position: initial;
  }
  
  .swiper-pagination-bullet {
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    color: ${COLORS.BLUE};
    background-color: transparent;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active{
    background-color:#DEE3FF;
    color:#19224C;
  }

`;
