import React from "react";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

const Index = () => {
  return (
    <ScrollView>
      {/* <Text>Jay Ganesh..</Text>

      <View>
        <Text>Jay Ganesh..</Text>
      </View> */}

      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 100, height: 100, paddingTop: 24, paddingBottom: 25 }}
      />
      <TextInput
        placeholder="enter your name-:"
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Button
        onPress={() => alert("Button Pressed....!")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Pressable onPress={() => alert("Button Pressed....!")}>
        <Text style={styles.Text}>Im pressable!</Text>
      </Pressable>
      {/* <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text>
      <Text>item1</Text> */}
      <view style={styles.container}>
        <Text style={styles.Text}>Im pressable!</Text>
      </view>
    </ScrollView>
  );
};

export default Index;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  Text: {
    fontWeight: 800,
    fontSize: 18,
    color: "blue",
  },
});
