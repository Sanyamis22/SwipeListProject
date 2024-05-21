import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

const SwipeableItem = ({ item }) => {
  const translateX = useSharedValue(0);
  const [swipedText, setSwipedText] = useState("");

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: () => {
      if (translateX.value > 50) {
        translateX.value = withSpring(100, {}, () => {
          runOnJS(setSwipedText)("Swiped Right");
          translateX.value = withSpring(0);
        });
      } else if (translateX.value < -50) {
        translateX.value = withSpring(-100, {}, () => {
          runOnJS(setSwipedText)("Swiped Left");
          translateX.value = withSpring(0);
        });
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.item, animatedStyle]}>
          <Image
            source={{
              uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg",
            }}
            style={{ height: 150, width: 150, alignSelf: "center" }}
            resizeMode="cover"
          />
          <Text style={styles.itemText}>{item.description}</Text>
          <Text style={styles.itemText2}>{item.link}</Text>
        </Animated.View>
      </PanGestureHandler>
      {swipedText !== "" && <Text style={styles.swipedText}>{swipedText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    alignItems: "center",
  },
  item: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },
  itemText2: {
    padding: 10,
    backgroundColor: "#fff",

    color: "blue",
  },
  itemText: {
    fontSize: 16,
  },
  swipedText: {
    position: "absolute",
    bottom: -21,
    fontSize: 16,
    color: "gray",
  },
});

export default SwipeableItem;
