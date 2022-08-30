import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import BotonIniciarSesion from "../Components/BotonIniciarSesion";
import { useNavigation } from '@react-navigation/native';
import { PostLogIn } from '../Axios/AxiosClient';
import { ActionTypes, useContextState } from '../ContextState'

const Login = ({ navigation }) => {

  const [userState, setUserState] = useState({
    email: 'challenge@alkemy.org',
    password: 'react',
  });

  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const { contextState, setContextState } = useContextState();


  return (

    <View>

      <Text style={styles.titulo}>Iniciar Sesion</Text>

      <TextInput
        style={styles.input}
        value={userState.email}
        placeholder="Correo Electronico"
        onChangeText={text => setUserState({ ...userState, email: text })}
      />

      <TextInput
        style={styles.input}
        value={userState.password}
        placeholder="Contraseña"
        onChangeText={text => setUserState({ ...userState, password: text })}
      />
      {error && <Text style={styles.alerta}>Error, datos incorrectos</Text>}

      <BotonIniciarSesion style={{ fontSize: 48 }}
        disable={disable}
        text="ENVIAR"
        onPress={async () => {
          setDisable(true)
          if (userState.email == '' || userState.password == '') {
            setError(true)
          }
          else {
            await PostLogIn(userState).then((token) => {
              setDisable(false)

              setContextState({
                type: ActionTypes.SetToken,
                value: token.token,
              });
              navigation.navigate('Home')
            })
              .catch(() => {
                console.log("Datos mal")
                setError(true)
                setDisable(false)
              });

          } setDisable(false)
        }}
      />
    </View>

  );
}

export default Login

const styles = StyleSheet.create({

  titulo: {
    top: '8%',
    marginLeft: '-13%',
    fontSize: 34,
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  input: {
    fontSize: 18,
    marginTop: '5%',
    marginLeft: '0%',
    width: '80%',
    borderWidth: 2,
    padding: '3%',
    top: '8%',
  },

  alerta: {
    top: '80%',
    marginLeft: '-13%',
    fontSize: 34,
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'red',
  },

});