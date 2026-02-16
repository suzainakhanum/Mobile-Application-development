import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const bankTransfers = ["Bank Mandiri", "Bank BCA", "Bank BNI", "Bank Mega"];
const virtualAccounts = ["Virtual Account Mandiri", "Virtual Account BCA", "Virtual Account BNI", "Virtual Account Mega"];
const installments = ["Kredivo", "Under 17 Years (Terms & Conditions Apply)"];

const PaymentScreen = () => {
  const navigation = useNavigation();
  
  // 1. Initial time set to 5 minutes (5 * 60 = 300 seconds)
  const [secondsLeft, setSecondsLeft] = useState(10);

  // 2. Timer Logic
  useEffect(() => {
    // If timer reaches 0, go back
    if (secondsLeft <= 0) {
      navigation.goBack();
      return;
    }

    // Set up the interval,
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [secondsLeft, navigation]);

  // 3. Helper to format seconds into HH:M
  // 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
