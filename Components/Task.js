import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text numberOfLines={1} style={styles.itemText}>
          {props.text}
        </Text>
      </View>
      {/* Trash / Delete */}
      <View style={styles.container}>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image
            source={require("../assets/icon1.png")}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
        </TouchableOpacity>
        {/* Trash / Delete */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#B6EC0B",
    opacity: 0.7,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: { maxWidth: "100%" },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#7ED957",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
