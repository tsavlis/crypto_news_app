import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { RootNavigator } from "./routes";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB-ji38Tp0U4AUbv08sr5VurmowubvQTY0",
  authDomain: "cryptonews-6bf7b.firebaseapp.com",
  databaseURL: "https://cryptonews-6bf7b.firebaseio.com",
  projectId: "cryptonews-6bf7b",
  storageBucket: "",
  messagingSenderId: "650806754807",
  appId: "1:650806754807:web:d593332e2d475fd0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const Nav = RootNavigator();
    return <Nav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default App;
