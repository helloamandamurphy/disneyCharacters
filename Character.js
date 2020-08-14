import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import characterData from "./characterData";
import * as Speech from "expo-speech";

class Character extends React.Component {
  constructor() {
    super();
    this.state = {
      name: characterData[0].name,
      img: characterData[0].img,
    };
  }

  getRandom = () => {
    let random =
      characterData[Math.floor(Math.random() * characterData.length)];
    this.setState({
      name: random.name,
      img: random.img,
    });
  };

  speak() {
    Speech.speak(this.state.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.speak()}>
          <Image source={{ uri: this.state.img }} style={styles.image}></Image>
        </TouchableWithoutFeedback>

        <Text style={styles.text}>{this.state.name}</Text>

        <Button
          onPress={this.getRandom}
          title="Shuffle"
          color="#E90101"
        ></Button>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 320,
    height: 320,
  },

  text: {
    fontSize: 24,
    padding: 10,
    fontFamily: "HelveticaNeue-Medium",
  },
});

export default Character;
