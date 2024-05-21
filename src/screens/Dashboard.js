import React from "react";
import { StyleSheet, FlatList, SafeAreaView, Image, Text } from "react-native";
import SwipeableItem from "../components/SwipeableItem ";
import { DATA } from "../constants/data";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SwipeableItem item={item} />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  list: {
    padding: 20,
  },
});
