import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { DATA } from "../constants/data";

const SwipeableCard = ({ item }) => (
  <View style={styles.card}>
    <Image
      source={{
        uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.text}>{item.description}</Text>
    <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
      <Text style={styles.link}>Learn More</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={DATA}
        renderCard={(card) => <SwipeableCard item={card} />}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("All cards swiped");
        }}
        cardIndex={0}
        backgroundColor={"#f0f0f0"}
        stackSize={3}
        containerStyle={{ alignItems: "center", justifyContent: "center" }}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
});
