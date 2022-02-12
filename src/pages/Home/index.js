import { StatusBar } from "expo-status-bar";
import {} from "react-native";
import Header from "../../components/Header";
import Storys from "../../components/Storys";

export default function Home() {
  return (
    <>
      <Header />
      <Storys />
      <StatusBar style="auto" />
    </>
  );
}
