import React from "react";
import { Image, View } from "react-native";

const Index = () => {
  return (
    <View>
      {/* <Text>Jay Ganesh..</Text>

      <View>
        <Text>Jay Ganesh..</Text>
      </View> */}

      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 100, height: 100, paddingTop: 24, paddingBottom: 25 }}
      />
    </View>
  );
};

export default Index;
