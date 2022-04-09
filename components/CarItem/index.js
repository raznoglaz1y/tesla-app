import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton/index.js";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.backgroundImage}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69 420</Text>
      </View>
      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => console.warn("Custom Order Pressed.")}
      />
      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => console.warn("Existing Inventory Pressed.")}
      />
    </View>
  ); 
};

export default CarItem;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#3A3D40",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
