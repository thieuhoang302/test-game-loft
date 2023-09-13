import styled, {createGlobalStyle} from 'styled-components';
import {COLORS} from "./constants";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 120px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export const TextWrapper = styled.span`
  color: ${({color}) => (color ? color : '')};
  font-size: ${({size}) => (size ? size : '')};
  font-weight: ${({weight}) => (weight ? weight : '')};
  letter-spacing: ${({spacing}) => (spacing ? spacing : '')};
  padding: ${({padding}) => (padding ? padding : '')};
  margin: ${({margin}) => (margin ? margin : '')};
  margin-bottom: ${({mb}) => (mb ? mb : '')};
  margin-top: ${({mt}) => (mt ? mt : '')};
`;
export const Section = styled.section`
  padding: ${({padding}) => (padding ? padding : '140px 0')};
  margin: ${({margin}) => (margin ? margin : '')};
  background: ${({inverse}) => (inverse ? COLORS.BLUE_WHITE : COLORS.BLUE)};
  position: ${({position}) => (position ? position : '')};
  width: ${({width}) => (width ? width : 'auto')};
  min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
  height: ${({height}) => (height ? height : 'auto')};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};

  @media screen and (max-width: 768px) {
    padding: ${({smPadding}) => (smPadding ? smPadding : '80px 0')};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({justify}) => (justify ? justify : '')};
  align-items: ${({align}) => (align ? align : '')};
  gap: ${({gap}) => (gap ? gap : '')};
  padding: ${({padding}) => (padding ? padding : '')};
  margin: ${({margin}) => (margin ? margin : '')};
  position: ${({position}) => (position ? position : '')};
  width: ${({width}) => (width ? width : 'auto')};
  min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
  height: ${({height}) => (height ? height : 'auto')};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
  flex-wrap: ${({wrap}) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({justify}) => (justify ? justify : '')};
  align-items: ${({align}) => (align ? align : '')};
  gap: ${({gap}) => (gap ? gap : '')};
  padding: ${({padding}) => (padding ? padding : '')};
  margin: ${({margin}) => (margin ? margin : '')};
  position: ${({position}) => (position ? position : '')};
  width: ${({width}) => (width ? width : 'auto')};
  min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
  height: ${({height}) => (height ? height : 'auto')};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
`;
export default GlobalStyle;
