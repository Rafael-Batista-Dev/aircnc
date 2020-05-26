import React, { useEffect, useState } from "react";
import SpotsList from "../components/SpotsList";

import socketio from "socket.io-client";

import {
  SafeAreaView,
  Image,
  AsyncStorage,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

import logo from "../assets/logo.png";

export default function List({ navigation }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("user").then((user_id) => {
      const socket = socketio("http://192.168.1.8:3333", {
        query: { user_id },
      });

      socket.on("booking_response", (booking) => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? "APROVADA" : "REJEITADA"
          }`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("techs").then((storageTechs) => {
      const techsArray = storageTechs.split(",").map((tech) => tech.trim());

      setTechs(techsArray);
    });
  });

  function handleLogout() {
    AsyncStorage.clear();
    alert("Você está desconectado!");

    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <ScrollView>
        {techs.map((tech) => (
          <SpotsList key={tech} tech={tech} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  button: {
    height: 36,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
