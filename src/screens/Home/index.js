import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
import CardQuestion from "../../components/CardQuestion";
import { api } from "../../services/api";
import { signOut } from "../../services/security";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar, IconSignOut } from "./styles";

function Home({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [page, setPage] = useState(1);

  const loadQuestions = async (reload) => {
    console.log("busvando novas perguntas");

    //se já tiver buscando,  não busca denovo
    if (isLoadingFeed) return;

    //se tiver chego no fim, não busca denovo
    if (totalQuestions > 0 && totalQuestions == questions.length) return;

    setIsLoadingFeed(true);

    const response = await api.get("/feed", {
      params: { page: reload ? 1 : page },
    });

    setPage(page + 1);

    setQuestions([...questions, ...response.data]);

    setTotalQuestions(response.headers["x-total-count"]);

    setIsLoadingFeed(false);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const handleSignOut = () => {
    signOut();

    navigation.navigate("Login");
  };

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Senai overflow</TextToolBar>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ position: "absolute", right: 4 }}
        >
          <IconSignOut name="sign-out" />
        </TouchableOpacity>
      </ToolBar>
      <FlatList
        style={{ width: "100%" }}
        onEndReached={() => loadQuestions()}
        onEndReachedThreshold={0.2}
        data={questions}
        keyExtractor={(question) => String(question.id)}
        renderItem={({ item: question }) => (
          <CardQuestion question={question} />
        )}
      />
    </Container>
  );
}

export default Home;
