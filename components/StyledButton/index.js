import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const BackgroundColor = type === "primary" ? "#3A3D40" : "#E7E7E6";
  const TextColor = type === "primary" ? "#E7E7E6" : "#3A3D40";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: BackgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.buttonText, { color: TextColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
}; 

export default StyledButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
