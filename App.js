import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from "react";
import List from "./components/list";
import styles from "./assets/css/css";
import {SafeAreaView, ScrollView, View, Text, TextInput, Pressable, TouchableOpacity, Button, Image, ImageBackground} from "react-native";

function HomeScreen({route , navigation}) {
const [listas, setListas] = useState();
const [itemListas, setItemListas] = useState([]);
const addList = () => {
  setItemListas([...itemListas, { nome: `${route.params?.text}`}]);
  setListas(null);
};
const deleteList = (index) => {
  let listCopy = [...itemListas];
  listCopy.splice(index, 1);
  setItemListas(listCopy);
}
  return(
  <SafeAreaView style={{flex:1}}>
    <View style={{flex:1, paddingTop: 50, backgroundColor:"#8ECAE6"}}>
      <ScrollView>
        {!itemListas.length ? (
          <View style={styles.containerBackground}>
            <ImageBackground
              source={require("./assets/heart-broken.png")}
              resizeMode="cover"
              style={styles.ImageBackground}
              ></ImageBackground>
            <Text style={styles.text}>Ainda sem listas por aqui...</Text>
          </View>
        ) : (
          <View style={styles.containerList}>
            {itemListas.map((lista, index) => {
              return (
                <Pressable key={index} onPress={() => navigation.navigate('ViewList', {lista, index, deleteList})}>
                  <List nomedalista = {lista.nome}/>
                </Pressable>
              )
            }
              )}
          </View>
        )}
        </ScrollView>
        <View style={styles.footer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('CreateList', {addList})
            }}
            >
            <Image
              style={styles.imageFooter}
              source={require("./assets/plus-circle.png")}
              />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
    )
}

function ViewList({route , navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ok. nome da lista é: {route.params?.lista.nome}</Text>
      <Text>Ok. index da lista é: {route.params?.index}</Text>
      <Button title="DELETE" onPress={() => {
        route.params?.deleteList(route.params?.index);
        navigation.navigate('Home')}}/>
    </View>
  );
}
function CreateList({route , navigation}){
    const [text, onChangeText] = useState(null);
    const [number, onChangeNumber] = useState(null);
  
    return (
      <SafeAreaView style={{ flex: 1}}>
        <TextInput
          style={styles.inputCreate}
          onChangeText={onChangeText}
          value={text}
          placeholder="Nome da Lista"
        />
        <TextInput
          style={styles.inputCreate}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Teclado Numérico"
          keyboardType="numeric"
        />
        <View>
          <Button title="CREATE" onPress={() => {
            route.params?.addList();
            navigation.navigate('Home', {text})}}/>
        </View>
      </SafeAreaView>
    );
  };


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} 
      options={{
        headerShown: false
      }}/>
      <Stack.Screen name="ViewList" component={ViewList} />
      <Stack.Screen name="CreateList" component={CreateList} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
