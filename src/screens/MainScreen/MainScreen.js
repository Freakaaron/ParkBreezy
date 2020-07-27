import React from "react";
import { 
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { useFonts, isLoaded } from 'expo-font';
import styles from "./styles";


export default function MainScreen({ navigation }) {

    const background = require('../../../assets/background.png');
    const [ isFontLoaded ] = useFonts({
        CandaraBold: require('../../../assets/fonts/Candara_Bold.ttf'),
        Candara: require('../../../assets/fonts/Candara.ttf')
      });

      if(!isFontLoaded) {
          return null;
      }

    return (
        <ImageBackground source={ background } style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', width: '100%', alignItems: 'center' }}>
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 45, fontFamily: 'CandaraBold', color: '#1354CC' }}>
                        Park
                    </Text>
                    <Text style={{ fontSize: 45, fontFamily: 'CandaraBold', color: '#EA3661'}}>
                        Breezy
                    </Text>
                </View>
                <Text style={{ fontSize: 21, fontFamily: 'Candara' }}>
                    Your Parking Buddy in a Busy City
                </Text>
                <TouchableOpacity style={{  width: '70%', backgroundColor: '#1354CC', justifyContent: 'center', height: 48, marginTop: 150, alignItems: 'center', borderRadius: 8 }} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontSize: 22, fontFamily: 'CandaraBold', color: '#FFFFFF', paddingTop: 8 }}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '70%', backgroundColor: '#EA3661', justifyContent: 'center', height: 48, marginTop: 20, alignItems: 'center', borderRadius: 8 }} onPress={() => navigation.navigate('Registration')}>
                    <Text style={{ fontSize: 22, fontFamily: 'CandaraBold', color: '#FFFFFF', paddingTop: 8 }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}