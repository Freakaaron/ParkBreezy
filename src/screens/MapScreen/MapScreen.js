import * as React from "react";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Text, View, Button } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

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
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 40.7809261,
        longitude: -73.9637594,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: 40.7809261, longitude: -73.9637594 }}
        title="this is a starting point (marker)"
        description="this needs to be changed for user's current location"
      />
    </MapView>
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

export default function MapScreen() {
  return (
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
  );
}
