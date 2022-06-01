import React, { useState } from "react";
import {Text, View, FlatList} from "react-native";
import styles from "../assets/css/css";

export default function() {
  return (
    <View>
      <FlatList style={styles.flatList}>
        <Text>a a a a</Text>
      </FlatList>
    </View>
  )
}