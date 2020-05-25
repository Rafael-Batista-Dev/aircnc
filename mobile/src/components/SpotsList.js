import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import api from "../services/api";

export default function SpotsList({ tech }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", {
        params: { tech },
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Empresas que usam <Text style={styles.bold}>{tech}</Text>{" "}
      </Text>
      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={(spot) => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              style={styles.thumbnail}
              source={{
                uri:
                  "http://192.168.1.8:3333/files/cowork-02-1589921266518.jpg",
              }}
            />
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>
              {item.price ? `R${item.price} / dia` : "GRATUITO"}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.textButton}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  title: {
    fontSize: 20,
    color: "#444",
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  bold: {
    fontWeight: "bold",
  },

  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    marginRight: 15,
  },

  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: "cover",
    borderRadius: 4,
  },

  company: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },

  price: {
    fontSize: 15,
    color: "#999",
    marginTop: 5,
  },

  button: {
    height: 30,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 15,
  },

  textButton: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
