import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text1}>Welcome to</Text>
        
        <Text style={styles.text2}>Thoughtful Ties</Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
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
  text1:{
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 75,
  },
  text2: {
    color: '#fff',
    fontSize: 32,
    //fontFamily: 'Josefin Sans',
    marginBottom: 75,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 25,
  },
});
