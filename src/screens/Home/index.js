import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CardQuestion from "../../components/CardQuestion";
import { api } from "../../services/api";
import { signOut } from "../../services/security";
import colors from "../../styles/colors";
import {
  Container,
  IconSignOut,
  ImageLogo,
  LoadingFeed,
  TextToolBar,
  ToolBar,
} from "./styles";
import imgLogo from "../../../assets/logo.png";

function Home({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [page, setPage] = useState(1);

  const loadQuestions = async (reload) => {
    console.log("Buscando novas perguntas");

    //se já tiver buscando, não busca de novo
    if (isLoadingFeed) return;

    //se tiver chego no fim, não busca de novo
    if (totalQuestions > 0 && totalQuestions == questions.length) return;

    setIsLoadingFeed(true);

    const response = await api.get("/feed", {
      params: { page },
    });

    setPage(page + 1);

    setQuestions([...questions, ...response.data]);

    setTotalQuestions(response.headers["x-total-count"]);

    console.log(totalQuestions);

    setIsLoadingFeed(false);
  };

  useEffect(() => {
    if (questions.length === 0) {
      loadQuestions();
    }
  }, [questions]);

  const handleSignOut = () => {
    signOut();
    navigation.navigate("Login");
  };

  const handleRefresh = () => {
    setPage(1);
    setQuestions([]);
  };

  return (
    <Container>
      <ToolBar>
        <TouchableOpacity
          style={{ position: "absolute", left: 4 }}
          onPress={handleRefresh}
        >
          <ImageLogo source={imgLogo} />
        </TouchableOpacity>
        <TextToolBar>SENAI OVERFLOW</TextToolBar>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ position: "absolute", right: 4 }}
        >
          <IconSignOut name="sign-out" />
        </TouchableOpacity>
      </ToolBar>
      <FlatList
        data={questions}
        style={{ width: "100%" }}
        onEndReached={() => loadQuestions()}
        onEndReachedThreshold={1}
        keyExtractor={(question) => String(question.id)}
        renderItem={({ item: question }) => (
          <CardQuestion question={question} />
        )}
      />
      {isLoadingFeed && <LoadingFeed size="large" color={colors.primary} />}
    </Container>
  );
}

export default Home;
