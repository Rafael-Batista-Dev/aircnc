import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";

import logo from "../assets/logo.png";

import api from "../services/api";

export default function Book({ navigation }) {
  const [date, setDate] = useState("");
  const id = navigation.getParam("id");

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem("user");

    await api.post(
      `/spots/${id}/bookings`,
      {
        date,
      },
      {
        headers: { user_id },
      }
    );

    Alert.alert("Solicitação de reserva");

    navigation.navigate("List");
  }

  function handleCancel() {
    navigation.navigate("List");
  }

  return (
    <View>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Data de interesse *</Text>
        <View style={styles.session}>
          <TextInput
            style={styles.input}
            placeholder="Qual data você que reservar ?"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={date}
            onChangeText={setDate}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitText}>Solicitar reserva</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancelar reserva</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },

  container: {
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  session: {
    padding: 20,
    borderWidth: 0.2,
    borderRadius: 4,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
  },

  label: {
    fontWeight: "bold",
    color: "#444",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 4,
  },

  submitButton: {
    height: 40,
    backgroundColor: "#ff385c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 8,
  },

  cancelButton: {
    height: 40,
    backgroundColor: "#EBEBEB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 20,
  },

  submitText: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 16,
  },

  cancelText: {
    color: "#ff385c",
    fontWeight: "500",
    fontSize: 16,
  },
});
