import React, { useEffect, useState } from "react";
import {
  Container,
  CardHeader,
  ImageProfile,
  HeaderContent,
  TextPoster,
  TextDate,
  CardBody,
  TextTitle,
  TextDescription,
  ImageQuestion,
  CardFooter,
  ContainerInputAnswer,
  InputAnswer,
  SendIcon,
  ContainerAnswer,
} from "./styles";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";
import { Alert, FlatList, TouchableOpacity } from "react-native";
import { api } from "../../services/api";
import { getUser } from "../../services/security";

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

  const [answers, setAnswers] = useState([]);

  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    setAnswers(question.Answers);
  }, []);

  const handleNewAnswer = async () => {
    try {
      const response = await api.post(`questions/${question.id}/answers`, {
        description: newAnswer,
      });

      const aluno = await getUser();

      const answerAdded = {
        id: response.data.id,
        description: newAnswer,
        created_at: response.data.createdAt,
        Student: {
          id: aluno.studentId,
          name: aluno.name,
          image: aluno.image,
        },
      };

      setAnswers([...answers, answerAdded]);

      setNewAnswer("");
    } catch (error) {
      console.error(error);
      if (error.response) {
        Alert.alert("Ops", error.response.data.error);
      }
    }
  };

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
            {answers.length === 0
              ? "Seja o primeiro a responder"
              : answers.length + " respostas"}
          </TextPoster>
        </TouchableOpacity>
        {showAnswers && answers.length > 0 && (
          <FlatList
            data={answers}
            keyExtractor={(answer) => String(answer.id)}
            renderItem={({ item: answer }) => <CardAnswer answer={answer} />}
          />
        )}

        <ContainerInputAnswer>
          <InputAnswer
            placeholder="Responda a essa pergunta"
            placeholderTextColor={colors.lightTransparent}
            onChangeText={(value) => setNewAnswer(value)}
            value={newAnswer}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 4 }}
            onPress={handleNewAnswer}
            disabled={!(newAnswer.length >= 10)}
          >
            <SendIcon name="paper-plane" enabled={newAnswer.length >= 10} />
          </TouchableOpacity>
        </ContainerInputAnswer>
      </CardFooter>
    </Container>
  );
}

export default CardQuestion;
