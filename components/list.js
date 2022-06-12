import React, { useState } from "react";
import {Text, View} from "react-native";
import styles from "../assets/css/css";

export default function(props) {
  return (
    <View style={styles.list}>
    <Text style={styles.text}>{props.nomedalista}</Text>
    </View>
  )
}