import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";
import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.View`
  width: 96%;
  margin: 10px;
  min-height: 100px;
  padding: 10px;

  background-color: ${colors.darkGray};
  border-radius: 10px;
`;

export const CardHeader = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const HeaderContent = styled.View`
  flex-direction: column;
  margin-left: 5px;
`;

export const TextPoster = styled(TextDefault)`
  font-weight: bold;
`;

export const TextDate = styled(TextDefault)`
  font-size: 12px;
  opacity: 0.9;
`;

export const CardBody = styled.View`
  flex-direction: column;
  margin-top: 15px;
`;

export const TextTitle = styled(TextDefault)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const TextDescription = styled(TextDefault)`
  padding: 8px;

  border-left-width: 2px;
  border-left-color: ${colors.primary};
`;

export const ImageQuestion = styled.Image`
  margin-top: 15px;
  width: 100%;
  height: 300px;

  background-color: ${colors.dark};
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: column;
`;

export const ContainerInputAnswer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 4px;
`;

export const InputAnswer = styled.TextInput`
  flex: 1;
  color: ${colors.light};
  padding: 10px;
  padding-right: 32px;
  font-size: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
`;

export const SendIcon = styled(Icon)`
  color: ${({ enabled }) => (enabled ? colors.light : colors.lightTransparent)};
  font-size: 25px;
`;

export const ContainerAnswer = styled.View`
  padding: 8px;
  background-color: ${colors.dark};
  border-radius: 8px;
  margin-top: 5px;
`;
