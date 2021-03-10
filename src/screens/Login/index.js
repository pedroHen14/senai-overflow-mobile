import React, { useState } from "react";
import { Alert, StatusBar, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar } from "../../styles/stylesGlobal";
import { Content, Label, TextInputLogin } from "../Login/styles";

function Login({ navigation }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setLogin({ ...login, email: e });
  };

  const handlePassword = (e) => {
    setLogin({ ...login, password: e });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert("Ops", error.response.data.error);
      }
    }
  };

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
          onChangeText={handleEmail}
        />
        <Label>Senha</Label>
        <TextInputLogin
          autoCompleteType="password"
          placeholder="Digite a sua senha"
          secureTextEntry={true}
          placeholderTextColor={colors.lightTransparent}
          onChangeText={handlePassword}
        />

        <Button
          text="Entrar"
          style={{ width: "96%" }}
          disabled={login.email === "" || login.password === ""}
          handlePress={handleSubmit}
        />
      </Content>
    </Container>
  );
}

export default Login;
