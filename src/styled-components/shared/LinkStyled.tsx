import styled from "styled-components";
import {Styles} from "../variables.styled";

export const LinkStyled = styled.a
    .attrs({ className: 'styled-link' })
    `
        font-size: ${(props: any) => props.size ? props.size : "1.6rem" };
        color: ${ (props: any) => props.color ? props.color : Styles.colors.black };
        text-decoration: none;
    `
