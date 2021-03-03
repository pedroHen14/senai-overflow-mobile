import React from "react";
import {
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  ContainerAnswer,
  ContainerInputAnswer,
  HeaderContent,
  ImageProfile,
  ImageQuestion,
  InputAnswer,
  SendIcon,
  TextDate,
  TextDescription,
  TextPoster,
  TextTitle,
} from "./styles";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";

function CardAnswer() {
  return (
    <ContainerAnswer>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>por Fulano</TextPoster>
          <TextDate>em 10/10/2020 às 12:12</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>Essa é a descrição da resposta</TextDescription>
      </CardBody>
    </ContainerAnswer>
  );
}

function CardQuestion() {
  return (
    <Container>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>por Fulano</TextPoster>
          <TextDate>em 10/10/2020 às 12:12</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>Titulo da questão</TextTitle>
        <TextDescription>Descrição da questão</TextDescription>
        <ImageQuestion style={{ resizeMode: "contain" }} source={fotoPerfil} />
      </CardBody>
      <CardFooter>
        <TextPoster>Seja o primeiro a responder</TextPoster>
        <CardAnswer />
        <CardAnswer />
        <ContainerInputAnswer>
          <InputAnswer
            placeholder="Responda a essa pergunta"
            placeholderTextColor={colors.lightTransparent}
          />
          <SendIcon name="paper-plane" />
        </ContainerInputAnswer>
      </CardFooter>
    </Container>
  );
}

export default CardQuestion;
