import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: "1", name: "Laptop", price: 55000 },
    { id: "2", name: "Mobile Phone", price: 20000 },
    { id: "3", name: "Headphones", price: 2000 },
    { id: "4", name: "Smart Watch", price: 5000 },
    { id: "5", name: "Keyboard", price: 1500 },
  ];

  const addToCart = (productName) => {
    setCartCount(cartCount + 1);
    Alert.alert("Added to Cart", productName);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.price}>₹ {item.price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(item.name)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <Text style={styles.cart}>🛒 Cart Items: {cartCount}</Text>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  cart: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#2196F3",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  price: {
    fontSize: 16,
    color: "white",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#2196F3",
  },
});
