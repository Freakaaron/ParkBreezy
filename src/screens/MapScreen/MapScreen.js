import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

import { 
  Text, 
  View, 
  Button, 
  TouchableOpacity, 
  Image,
  TextInput
 } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps";
import BottomSheet from 'react-native-simple-bottom-sheet';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "Map":
      return "Parking map";
    case "Profile":
      return "My profile";
    case "Shops":
      return "Shopping with Coins";
  }
}
/*
function MapScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Find my parking spot"
        onPress={() => navigation.navigate(InnerMapScreen)}
      />
    </View>
  );
}
*/
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Here, to display like... {"\n"}- User's profile pic {"\n"}- User's
        username{"\n"}- User's # of coins {"\n"}- etc... {"\n"}- we need some
        design of this
        {"\n"}- need to connect to DB
      </Text>
    </View>
  );
}

function ShopsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Here, we can display products of our partners' {"\n"}
        that users can buy with coins
      </Text>
    </View>
  );
}

function InnerMapScreen() {
  const [parkingColor, setParkingColor] = useState("#000000");
  const [parkingBackgroundColor, setParkingBackgroundColor] = useState("#E0E0E0");

  const [directionsColor, setDirectionsColor] = useState("#000000");
  const [directionsBackgroundColor, setDirectionsBackgroundColor] = useState("#E0E0E0");

  const [rulesColor, setRulesColor] = useState("#000000");
  const [rulesBackgroundColor, setRulesBackgroundColor] = useState("#E0E0E0");

  const [freeColor, setFreeColor] = useState("#000000");
  const [freeBackgroundColor, setFreeBackgroundColor] = useState("#E0E0E0");

  const [meteredColor, setMeteredColor] = useState("#000000");
  const [meteredBackgroundColor, setMeteredBackgroundColor] = useState("#E0E0E0");

  const selectParking = () => {
    setParkingColor("#ffffff");
    setParkingBackgroundColor("#EA3661");

    setDirectionsColor("#000000");
    setDirectionsBackgroundColor("#E0E0E0");

    setRulesColor("#000000");
    setRulesBackgroundColor("#E0E0E0");
    
  }
  const selectDirections = () => {
    setParkingColor("#000000");
    setParkingBackgroundColor("#E0E0E0");

    setDirectionsColor("#ffffff");
    setDirectionsBackgroundColor("#EA3661");

    setRulesColor("#000000");
    setRulesBackgroundColor("#E0E0E0");
  }
  const selectRules = () => {
    setParkingColor("#000000");
    setParkingBackgroundColor("#E0E0E0");

    setDirectionsColor("#000000");
    setDirectionsBackgroundColor("#E0E0E0");

    setRulesColor("#ffffff");
    setRulesBackgroundColor("#EA3661");
  }
  const selectFree = () => {
    if (freeBackgroundColor == "#E0E0E0") {
      setFreeColor("#ffffff");
      setFreeBackgroundColor("#5DC659");
    }
    else {
      setFreeColor("#000000");
      setFreeBackgroundColor("#E0E0E0");
    }
  }
  const selectMetered = () => {
    if (meteredBackgroundColor == "#E0E0E0") {
      setMeteredColor("#ffffff");
      setMeteredBackgroundColor("#5A73F5");
    }
    else {
      setMeteredColor("#000000");
      setMeteredBackgroundColor("#E0E0E0");
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 40.7809261,
          longitude: -73.9637594,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomTapEnabled
        rotateEnabled
        zoomEnabled
        scrollEnabled
        pitchEnabled
      >
        <Polygon coordinates={[
          {latitude: 40.7809261, longitude: -73.9637594},
          {latitude: 40, longitude: -74},
          {latitude: 41.78, longitude: -72}]} 
          fillColor="#rgba(0,200,0,0.5)"
                    strokeColor="rgba(0,0,0,0.5)"
                    strokeWidth={2} />
        <Marker
          coordinate={{ latitude: 40.7809261, longitude: -73.9637594 }}
          title="this is a starting point (marker)"
          description="this needs to be changed for user's current location"
        />
      </MapView>
      <BottomSheet isOpen>
        <View style={{ flex: 1, justifyContent: 'center', width: '70%', backgroundColor: '#E0E0E0', alignSelf: 'center', borderRadius: 5, height: 20, flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: '35%', alignItems: 'center', backgroundColor: parkingBackgroundColor, borderRadius: 5 }} onPress={() => selectParking()}>
            <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 2, color: parkingColor }}>
              Parking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '40%', alignItems: 'center', backgroundColor: directionsBackgroundColor, borderRadius: 5 }} onPress={() => selectDirections()} >
            <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 2, color: directionsColor }}>
              Directions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '25%', alignItems: 'center', backgroundColor: rulesBackgroundColor, borderRadius: 5 }} onPress={() => selectRules()} >
            <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 2, color: rulesColor }}>
              Rules
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row', marginTop: 30, height: 26, marginBottom: 5 }}>
          <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 5 }}>
              Date
          </Text>
          <TextInput style={{ fontFamily: 'Candara', fontSize: 16, padding: 5, marginLeft: 48, borderRadius: 5, borderColor: '#828282', borderWidth: 1, width: '20%', textAlign: 'center' }} 
            placeholder="Day"
          />
          <TextInput style={{ fontFamily: 'Candara', fontSize: 16, padding: 5, marginLeft: 10, borderRadius: 5, borderColor: '#828282', borderWidth: 1, width: '25%', textAlign: 'center' }} 
            placeholder="Time"
          />
          <TouchableOpacity style={{ backgroundColor: "#E0E0E0", marginLeft: 10, borderRadius: 5, width: '20%', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 5 }}>
              Now
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row', marginTop: 10, height: 26, marginBottom: 20 }}>
          <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 5 }}>
              Parking
          </Text>
          <TouchableOpacity style={{ backgroundColor: freeBackgroundColor, marginLeft: 30, borderRadius: 5, width: '20%', alignItems: 'center' }} onPress={() => selectFree()}>
            <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 5, color: freeColor }}>
              Free
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: meteredBackgroundColor, marginLeft: 10, borderRadius: 5, width: '25%', alignItems: 'center' }} onPress={() => selectMetered()}>
            <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 5, color: meteredColor }}>
              Metered
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#E0E0E0", marginLeft: 10, borderRadius: 5, width: '20%', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Candara', fontSize: 16, padding: 5 }}>
              Garage
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Shops" component={ShopsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity style={{ marginTop: 5 }} onPress={() => navigation.openDrawer()}>
          <Image source={require('../../../assets/hamburger.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <View style={{ width: '78%', flexDirection: 'row', justifyContent: 'center' }}>
          <Text
              style={{
                fontSize: 45,
                fontFamily: "CandaraBold",
                color: "#1354CC",
              }}
            >
              Park
            </Text>
            <Text
              style={{
                fontSize: 45,
                fontFamily: "CandaraBold",
                color: "#EA3661",
              }}
            >
              Breezy
            </Text>
          </View>
        <TouchableOpacity style={{ marginTop: 5 }}>
          <Image source={require('../../../assets/account.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Map") {
              return (
                <Ionicons
                  name={focused ? "ios-navigate" : "ios-navigate"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Profile") {
              return (
                <Ionicons
                  name={focused ? "ios-contact" : "ios-contact"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Shops") {
              return (
                <Ionicons
                  name={focused ? "ios-list-box" : "ios-list"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Map" component={InnerMapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Shops" component={ShopsScreen} />
      </Tab.Navigator>
    </View>
    
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MapScreen({ navigation }) {

  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator initialRouteName="Home" drawerContentOptions={{ activeBackgroundColor: '#ffffff', activeTintColor: '#000000'}}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: '#ffffff'} }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </View>
    );
}
