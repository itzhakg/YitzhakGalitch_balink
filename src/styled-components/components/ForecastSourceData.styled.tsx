import styled from 'styled-components';
import { Styled } from "../functions.styled";

export const ForecastSourceDataContainer = styled.div
    .attrs({className: 'source'})
    `
      display: flex;
      width: 100%;

    ${ Styled.mediaManager(
        Styled.MediaBreakPoints.tabletPortrait,
            `flex-direction: column;
            `
    ) }
      
      & > div {
        margin-right: 2rem;
      }
      
      .source-title{
        height: inherit;
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 600;
        
        ${ Styled.mediaManager(
                Styled.MediaBreakPoints.phone,
                `font-size: 1.4rem;
            `
        ) }
      }
      
    `
