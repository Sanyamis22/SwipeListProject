import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Dashboard from "./src/screens/Dashboard";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="auto" />

      <Dashboard />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
