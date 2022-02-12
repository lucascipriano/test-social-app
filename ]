import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import New from "./pages/New";
import Profile from "./pages/Profile";
import ButtonPlus from "./components/ButtonPlus";

import { FontAwesome, AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#031927",
            borderTopColor: "transparent",
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={New}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ size, color }) => (
              <ButtonPlus size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="appstore1" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
