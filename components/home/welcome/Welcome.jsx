import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./welcome.style";

import { icons, SIZES } from "../../../constants";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Yersultan</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
