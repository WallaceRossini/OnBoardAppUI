import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import colors from '../../../assets/colors/colors';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Home page</Text>
      <TouchableHighlight style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Prev</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 50,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10
  },
  text: {
    fontFamily: "Roboto",
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold'
  }
})