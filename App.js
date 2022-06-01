import React, { useState } from "react";
import List from "./components/list";
import styles from './assets/css/css';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const YourApp = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View style={{ flex: 1 }}>
        <View style={styles.container}>
        <ImageBackground source = {require("./assets/heart-broken.png")} resizeMode="cover" style={styles.ImageBackground}>
        </ImageBackground>
        <Text style={styles.text}>Ainda sem listas por aqui...</Text>
        </View>
        <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => {alert("List created"); }}>
          <Image style={styles.imageFooter} source={require("./assets/plus-circle.png")}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default YourApp;
