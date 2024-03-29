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
        <Image style={styles.logo} source={require('../../assets/icons/newLogo.png')} />
        <Text style={styles.text2}>Thoughtful Ties</Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Signup')}>
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
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 40,
  },
  text2: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
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
  logo: {
    height: 225,
    width: 225,
    resizeMode: 'contain',
    marginLeft: 20,
    marginBottom: 10,
  },
});
