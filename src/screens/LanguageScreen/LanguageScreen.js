import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ImageBackground,Picker } from "react-native";

export default function LanguageScreen({navigation}) {

    const background = require('../../../assets/background.png');

    return (
        <ImageBackground source={ require('../../../assets/background.png') } style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 32, fontFamily: 'CandaraBold', textAlign: 'left', width: '75%', height: "5%", marginLeft:'15%' }}>
          We're almost done!
        </Text>
        
        <Text style={{ fontSize: 20, fontFamily: 'Candara', textAlign: 'left', width: '75%',marginLeft:'15%', bottom:'-3%'}}>
          Let us know which language you're most comfortable with.
        </Text>
               <Picker> 
            <Picker.Item label="Select a language" value="English"></Picker.Item>
            <Picker.Item label="English" value="Spanish"></Picker.Item>
            <Picker.Item label="Spanish" value="Urdu"></Picker.Item>
            <Picker.Item label="Hindi" value="Hindi"></Picker.Item>
            <Picker.Item label="Yorubu" value="Yorubu"></Picker.Item>
            <Picker.Item label="Ibo" value="Ibo"></Picker.Item>
            <Picker.Item label="Amharic" value="Amharic"></Picker.Item>
          </Picker>
          
          
          <TouchableOpacity style={{ width: '75%', backgroundColor: '#EA3661', justifyContent: 'center', height: 48, marginTop: 40, alignItems: 'center', borderRadius: 8, marginLeft:"11%" }} onPress={() => navigation.navigate('Language')}>
            <Text style={{ fontSize: 22, fontFamily: 'CandaraBold', color: '#FFFFFF', paddingTop: 8 }}>Sign up</Text>
        </TouchableOpacity>
            
       
        
        
        </ImageBackground>

          
    );
}