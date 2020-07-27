import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function HomeScreen() {
  return (
    <View>
      <Text>Hello HomeScreen!</Text>
    </View>
  );
}
