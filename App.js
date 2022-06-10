import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from "react";
import List from "./components/list";
import styles from "./assets/css/css";
import {SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
} from "react-native";

function HomeScreen({ navigation }) {
const [listas, setListas] = useState();
const [itemListas, setItemListas] = useState([]);
const addList = () => {
  setItemListas([...itemListas, { nome: "Lista de Compras !!!"}]);
  setListas(null);
};
const deleteList = (index) => {
  let listCopy = [...itemListas];
  listCopy.splice(index, 1);
  setItemListas(listCopy);
}
  return(
  <SafeAreaView style={{flex:1, paddingTop: 50, backgroundColor:"#8ECAE6"}}>
    <View>
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
                // <TouchableOpacity key={index} onPress={() => deleteList()}>
                //   <List nomedalista = {lista.nome}/>
                // </TouchableOpacity>
                <TouchableOpacity key={index} onPress={() => navigation.navigate('Lista', {lista, index})}>
                  <List nomedalista = {lista.nome}/>
                </TouchableOpacity>
              )
            }
              )}
          </View>
        )}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addList();
            }}
            >
            <Image
              style={styles.imageFooter}
              source={require("./assets/plus-circle.png")}
              />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    )
}

function Lista({route}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ok. nome da lista é: {route.params?.lista.nome}</Text>
      <Text>Ok. index da lista é: {route.params?.index}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} 
      options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Lista" component={Lista} />
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
