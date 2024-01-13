import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function WelcomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Thoughtful Ties</Text>
        <View>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E70F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    //fontFamily: 'Josefin Sans',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
