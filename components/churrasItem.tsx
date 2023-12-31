import React from "react";
import { View, Image, StyleSheet, Text, ImageProps} from "react-native";
import { Churras } from "../Data/churrasList";

export function churrasItem({ name, image, description}: Churras) {
    return (
        <View style={styles.container}>
      <Image style={{ width: 120, height: 100 }} source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItens: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
});
    
