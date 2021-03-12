import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Content = styled.View`
  flex: 1;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const Label = styled(TextDefault)`
  width: 96%;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const TextInputLogin = styled.TextInput`
  width: 96%;
  color: ${colors.light};
  padding: 10px;
  margin-bottom: 15px;

  background-color: ${colors.darkGray};
  font-size: 20px;
  border-radius: 4px;
`;