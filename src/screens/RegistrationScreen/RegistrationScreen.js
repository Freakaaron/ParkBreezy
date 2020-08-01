import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Picker,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { firebase } from "../../firebase/config";
import { useFonts } from "expo-font";

export default function RegistrationScreen({ navigation }) {
  const background = require("../../../assets/background.png");
  const [isFontLoaded] = useFonts({
    CandaraBold: require("../../../assets/fonts/Candara_Bold.ttf"),
    Candara: require("../../../assets/fonts/Candara.ttf"),
  });

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  /*const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");*/

  if (!isFontLoaded) {
    return null;
  }
  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  const togglePasswordDisplay = () => {
    setHidePassword(!hidePassword);
  };

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Home", { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ImageBackground
      source={background}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="true"
        contentContainerStyle={{
          flex: 1,
          marginTop: "40%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 45,
            fontFamily: "CandaraBold",
            textAlign: "left",
            width: "75%",
          }}
        >
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Candara",
            textAlign: "left",
            width: "75%",
          }}
        >
          You are a few clicks away from the city's best parking.
        </Text>
        <View style={{ flexDirection: "row", width: "75%", marginTop: 40 }}>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#828282"
            backgroundColor="white"
            style={{
              height: 48,
              padding: 10,
              fontSize: 16,
              borderRadius: 8,
              borderColor: "#BDBDBD",
              borderWidth: 1,
              width: "48%",
            }}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#828282"
            backgroundColor="white"
            style={{
              height: 48,
              padding: 10,
              fontSize: 16,
              borderRadius: 8,
              borderColor: "#BDBDBD",
              borderWidth: 1,
              width: "48%",
              marginLeft: "4%",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "75%",
            backgroundColor: "white",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 30,
            borderColor: "#BDBDBD",
            borderWidth: 1,
            height: 48,
          }}
        >
          <Image
            source={require("../../../assets/account.png")}
            style={{ width: 20, height: 20, margin: 5 }}
          />
          <TextInput
            style={{ padding: 10, fontSize: 16, width: "90%" }}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "75%",
            backgroundColor: "white",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 30,
            borderColor: "#BDBDBD",
            borderWidth: 1,
            height: 48,
          }}
        >
          <Image
            source={require("../../../assets/lock.png")}
            style={{ width: 20, height: 20, margin: 5 }}
          />
          <TextInput
            style={{ padding: 10, fontSize: 16, width: "75%" }}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={hidePassword}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => togglePasswordDisplay()}>
            <Image
              source={require("../../../assets/eye.png")}
              style={{ marginLeft: 0, width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "75%",
            backgroundColor: "#EA3661",
            justifyContent: "center",
            height: 48,
            marginTop: 40,
            alignItems: "center",
            borderRadius: 8,
          }}
          onPress={() => navigation.navigate("Language")}
        >
          <Text
            style={{
              fontSize: 22,
              fontFamily: "CandaraBold",
              color: "#FFFFFF",
              paddingTop: 8,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
