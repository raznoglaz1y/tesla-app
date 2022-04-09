import React from "react";
import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";
import StyledButton from "../StyledButton/index.js";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.backgroundImage} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {" "}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View> 
      <View style={styles.buttonsContainer}>
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
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
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
  subtitleCTA: {
    fontSize: 16,
    color: "#3A3D40",
    textDecorationLine: "underline",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});
