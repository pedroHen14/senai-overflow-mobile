import React from "react";
import { StatusBar, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar } from "../../styles/stylesGlobal";
import { Content, Label, TextInputLogin } from "../Login/styles";

function Login({ navigation }) {
  return (
    <Container>
      <ToolBar>
        <TextToolBar>Faça o login</TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-mail</Label>
        <TextInputLogin
          autoCompleteType="email"
          placeholder="Digite seu Email"
          placeholderTextColor={colors.lightTransparent}
        />
        <Label>Senha</Label>
        <TextInputLogin
          autoCompleteType="password"
          placeholder="Digite a sua senha"
          secureTextEntry={true}
          placeholderTextColor={colors.lightTransparent}
        />
        <Button
          text="Entrar"
          style={{ width: "96%" }}
          onPress={() => navigation.navigate("Home")}
        />
      </Content>
    </Container>
  );
}

export default Login;
