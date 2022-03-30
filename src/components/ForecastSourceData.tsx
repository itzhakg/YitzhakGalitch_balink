import React from "react";
import { ForecastSource } from "../interfaces/weatherApi";
import {LinkStyled} from "../styled-components/shared/LinkStyled";
import {ForecastSourceDataContainer} from "../styled-components/components/ForecastSourceData.styled";



export interface ForecastSourceProps extends ForecastSource {}

export const ForecastSourceData = (props: ForecastSourceProps) => {
  return (
      <ForecastSourceDataContainer>
          <div className="source-title">
              { props.title }
          </div>
          <div className="source-url">
              <LinkStyled href={props.url}> { props.url } </LinkStyled>
          </div>
      </ForecastSourceDataContainer>
  );
}
