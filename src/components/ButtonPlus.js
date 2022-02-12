import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function ButtonPlus({ color, size }) {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" color={color} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#C8E0F4",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
