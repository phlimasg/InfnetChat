import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TextInput, Button, Alert } from 'react-native';

export default class App extends Component {
    state = {userName: ''}
    render() {    
        return (
        <SafeAreaView style={styles.container}>
            <Image 
            style={{width: 100, height: 100, resizeMode: "contain"}}
            source={require('../images/home_icon.png')}></Image>
            <Text style={styles.text}>Infnet Chat</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder={'Insira seu nome'}
                onChangeText={(text) => this.setState({userName: text})}
                value={this.state.userName}
            ></TextInput>
            <Button style={styles.button} 
            onPress={
                () => {
                    this.props.onSubmit(this.state.userName).then(() => this.setState({userName: ''}))
                }
            }            
            title={'Entrar'}></Button>
            
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      fontSize: 24
  },
  textInput: {
      borderColor: 'black',
      padding: 10,
      borderWidth: 1,
      marginTop:15,
      marginBottom: 10,
      fontSize: 28
  },
  button: {
    backgroundColor: 'black',
    color: 'purple',
  }
});
