import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, SafeAreaView} from 'react-native';

//Telas
import HomeScreen from './pages/home'
import ChatGroupScreen from './pages/chat_group'
import ChatPrivateScreen from './pages/chat_private'

export default class App extends Component {
  
  render() {    
    return (
      <SafeAreaView style={styles.container}>
        <ChatGroupScreen></ChatGroupScreen>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

