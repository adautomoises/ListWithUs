import React, { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView, StyleSheet, Image } from "react-native";

const YourApp = () => {
  return (
    <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          
        </ScrollView>
        <View style={styles.footer}>
        <TouchableOpacity style={styles.button}onPress={() => {alert("List created");}}>
            <Image style={styles.image} source={require("./assets/plus-circle.png")}/>
          </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8ECAE6",
  },
  footer: {
    alignItems: "center", justifyContent: "center"
  },
  button: {
    padding: 20,
  },
  image: {
    width: 63,
    height: 63,
  },
});

export default YourApp;
