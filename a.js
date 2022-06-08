import React, { useState } from "react";
import List from "./components/list";
import styles from "./assets/css/css";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const YourApp = () => {
  const [listas, setListas] = useState();
  const [itemListas, setItemListas] = useState([]);
  const addList = () => {
    setItemListas([...itemListas, { nome: "Lista de Compras"}]);
    setListas(null);
  };
  const deleteList = (index) => {
    let listCopy = [...itemListas];
    listCopy.splice(index, 1);
    setItemListas(listCopy);
  }

  return (
  <SafeAreaView style={{flex:1, paddingTop: 50, backgroundColor:"#8ECAE6"}}>
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
              <TouchableOpacity key={index} onPress={() => deleteList()}>
                <List nomedalista = {lista.nome}/>
              </TouchableOpacity>
              // <TouchableOpacity key={index} onPress={() => navigation.navigate('Lista')}>
              //   <List nomedalista = {lista.nome}/>
              // </TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default YourApp;