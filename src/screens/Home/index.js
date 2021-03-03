import React from "react";
import { StatusBar } from "react-native";
import CardQuestion from "../../components/CardQuestion";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar } from "./styles";

function Home() {
  StatusBar.setBackgroundColor(colors.primary);

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Senai overflow</TextToolBar>
      </ToolBar>
      <CardQuestion />
    </Container>
  );
}

export default Home;
