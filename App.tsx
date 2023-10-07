import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Diagnose from "./pages/Diagnose";
import DiagnoseDetails from "./pages/nestedPages/DiagnoseDetails";
import Login from "./pages/Authentication/Login";
import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { FirebaseAuth } from "./firebaseConfig";
import DrawerItems from "./constants/MenuItems";
import Appointment from "./pages/Appointment";
import { Feather } from "@expo/vector-icons";
import DoctorDetails from "./pages/nestedPages/DoctorDetails";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Login Screen"
      screenOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 10 },
      }}
    >
      {DrawerItems.map((drawer) => (
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          options={{
            drawerIcon: ({ focused }) =>
              drawer.iconType === "Material" ? (
                <MaterialCommunityIcons
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                />
              ) : drawer.iconType === "Feather" ? (
                <Feather
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                />
              ) : (
                <></>
              ),
          }}
          component={
            //drawer.name==='LoginScreen' ? LoginScreen
            drawer.name === "Diagnose" ? Diagnose : Appointment
          }
        />
      ))}
    </Drawer.Navigator>
  );
};

export default function App() {
  const auth = FirebaseAuth;
  const [user, setuser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setuser(user);
      console.log("user:", user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user == null ? (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Group>
              <Stack.Screen name="Prior Care" component={MainScreen} />
              <Stack.Screen
                name="Diagnose Details"
                component={DiagnoseDetails}
              />
              <Stack.Screen name="Doctor Details" component={DoctorDetails} />
            </Stack.Group>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
