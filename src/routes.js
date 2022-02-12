import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import New from "./pages/New";
import Services from "./pages/Services";
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
          headerShown: false,
        }}
        options={{}}
      >
        <Tab.Screen
          name="Home"
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
          name="Services"
          component={Services}
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
