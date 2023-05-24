import { StatusBar } from 'expo-status-bar';
import {  TextInput, LogBox, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <img src={require('./assets/Logo.png')}/>
      <Text style={{fontWeight: "bold"}}> marketspace</Text>
      <Text>seu espaço de compra e venda</Text>
      <Text>acesse sua conta</Text>
      <TextInput 
      placeholder='E-mail'
      />
      <TextInput
      placeholder='Senha'
      />
      <TouchableOpacity>Entrar</TouchableOpacity>
      <Text>Ainda não tem acesso?</Text>
      <Text>Criar uma conta</Text>
      <StatusBar style="auto" />

    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edecee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
