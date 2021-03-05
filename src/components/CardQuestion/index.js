import React, { useState } from "react";
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
import { FlatList, Touchable, TouchableOpacity } from "react-native";

function CardAnswer({ answer }) {
  return (
    <ContainerAnswer>
      <CardHeader>
        <ImageProfile
          source={
            answer.Student.image ? { uri: answer.Student.image } : fotoPerfil
          }
        />
        <HeaderContent>
          <TextPoster>por {answer.Student.name}</TextPoster>
          <TextDate>em {answer.created_at}</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>{answer.description}</TextDescription>
      </CardBody>
    </ContainerAnswer>
  );
}

function CardQuestion({ question }) {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <Container>
      <CardHeader>
        <ImageProfile
          source={
            question.Student.image
              ? { uri: question.Student.image }
              : fotoPerfil
          }
        />
        <HeaderContent>
          <TextPoster>por {question.Student.name}</TextPoster>
          <TextDate>em {question.created_at}</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>{question.title}</TextTitle>
        <TextDescription>{question.description}</TextDescription>
        {question.image && (
          <ImageQuestion
            style={{ resizeMode: "contain" }}
            source={{ uri: question.image }}
          />
        )}
      </CardBody>
      <CardFooter>
        <TouchableOpacity onPress={() => setShowAnswers(!showAnswers)}>
          <TextPoster>
            {question.Answers.length === 0
              ? "Seja o primeiro a responder"
              : question.Answers.length + " respostas"}
          </TextPoster>
        </TouchableOpacity>
        {showAnswers && question.Answers.length > 0 && (
          <FlatList
            data={question.Answers}
            keyExtractor={(answer) => String(answer.id)}
            renderItem={({ item: answer }) => <CardAnswer answer={answer} />}
          />
        )}
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
