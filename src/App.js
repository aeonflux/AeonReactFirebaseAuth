import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "../components/LoginForm";

class App extends Component {
  // null - unindentified
  state = {
    loggedIn: null
  };
  // Automatically invoked
  componentWillMount() {
    // firebase initialization
    firebase.initializeApp({
      apiKey: "AIzaSyBQRI8lugfG4FVI3awz4xctYok2V-q-nn8",
      authDomain: "aeonreactnativeauth.firebaseapp.com",
      databaseURL: "https://aeonreactnativeauth.firebaseio.com",
      projectId: "aeonreactnativeauth",
      storageBucket: "aeonreactnativeauth.appspot.com",
      messagingSenderId: "290329666092"
    });

    // Identifies if user is logged in or not
    // everytime the app is open
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}> Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
    }
    if (this.state.loggedIn) {
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent}
      </View>
    );
  }
}

export default App;
