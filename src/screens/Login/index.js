import React, { useState } from "react";
import { Alert, StatusBar, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import colors from "../../styles/colors";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { Content, Label, TextInputLogin } from "./styles";

function Login({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (e) => {
    setLogin({ ...login, email: e });
  };

  const handlePassword = (e) => {
    setLogin({ ...login, password: e });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const response = await api.post("/sessions", login);

      signIn(response.data);

      setIsLoading(false);

      navigation.navigate("Home");
    } catch (error) {
      setIsLoading(false);

      console.log(error);
      if (error.response) {
        Alert.alert("Ops", error.response.data.error);
      }
    }
  };

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Faça o Login</TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-Mail</Label>
        <TextInputLogin
          autoCompleteType="email"
          placeholderTextColor={colors.lightTransparent}
          placeholder="Digite o seu e-mail"
          onChangeText={handleEmail}
        />

        <Label>Senha</Label>
        <TextInputLogin
          autoCompleteType="password"
          placeholder="Digite a sua senha"
          placeholderTextColor={colors.lightTransparent}
          secureTextEntry={true}
          onChangeText={handlePassword}
        />
        <Button
          handlePress={handleSubmit}
          text={isLoading ? "Verificando..." : "Entrar"}
          disabled={isLoading || login.email === "" || login.password === ""}
          style={{ width: "96%" }}
        />
      </Content>
    </Container>
  );
}

export default Login;
