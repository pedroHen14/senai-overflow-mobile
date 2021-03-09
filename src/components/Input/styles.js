import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Container = styled.View`
  width: 100%;
  position: relative;
  margin-top: 15px;

  > input {
    border: 0;
    padding-left: 10px;
    border-radius: 3px;
    font-family: sans-serif;
  }

  > label {
    cursor: text;
    position: absolute;
    top: 0;
    left: 10px;
    color: ${colors.darkGray};
    display: flex;
    align-items: center;
  }

  > input,
  > label {
    width: 100%;
    height: 30px;
    font-size: 16px;
    transition: 0.2s ease-in-out;
  }

  > input:not(:placeholder-shown) + label,
  > input:focus + label {
    left: 0;
    font-size: 14px;
    color: ${colors.light};
    top: -25px;
  }
`;
