import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TextInput, Button, ScrollView, View } from 'react-native';

export default class App extends Component {
    
    render() {    
        return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.recebida}>
                    <Text style={styles.mensagem}>Mensagem Recebida</Text>
                    <Text style={styles.enviado}>Mensagem Recebida</Text>
                </View>
                <View style={styles.enviada}>
                    <Text style={styles.mensagem}>Mensagem Enviada</Text>
                    <Text style={styles.enviado}>Nome do Fulano</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',  
    flexDirection: "row"  
  },
  recebida: {
      backgroundColor: 'black',
      borderRadius: 6,
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
      width: '90%'
      
  },
  enviada: {
    backgroundColor: '#333333',
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: '10%',
    marginRight: 5,
    alignItems:'flex-end',
    textAlign: "right",    
    flex: 1
},
  mensagem:{
    color: 'white',
    fontSize: 18

  },
  enviado: {
    color: 'gray',
    fontSize: 12
  }

});
