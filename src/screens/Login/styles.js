import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextInputLogin = styled.TextInput`
  width: 96%;
  color: ${colors.light};
  padding: 10px;
  margin-bottom: 15px;
  font-size: 20px;
  background-color: ${colors.darkGray};
  border-radius: 4px;
`;

export const Label = styled(TextDefault)`
  width: 96%;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  font-size: 20px;
`;
