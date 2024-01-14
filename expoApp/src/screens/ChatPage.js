import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const navigation = useNavigation();

  const autoResponses = [
    'Hello',
    'How are you?',
    'I\'m good',
    'I like knitting',
    'What\'s your hobbies',
    'Wow, me too!',
  ];

  const autoResponseCounter = React.useRef(0);

  useEffect(() => {
    if (messages.length % 2 === 0) {
      setTimeout(() => {
        const responseIndex = autoResponseCounter.current % autoResponses.length;
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: `${prevMessages.length + 1}`, text: autoResponses[responseIndex], sender: 'other' },
        ]);
        autoResponseCounter.current += 1;
      }, 1000);
    }
  }, [messages, autoResponses]);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: `${prevMessages.length + 1}`, text: newMessage, sender: 'user' },
      ]);
      setNewMessage('');
    }
  };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image
              source={require('../../assets/icons/backBlack.png')} 
              style={styles.arrow}
          />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Image
              source={require('../../assets/images/friendE.png')} 
              style={styles.headerImage}
            />
            <Text style={styles.headerText}>Austin</Text>
          </View>
          <TouchableOpacity onPress={() => alert('Map')}>
            <Text style={styles.headerText}>Map</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.convoText}>Start a conversation!</Text>

        <View style={styles.container}>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={item.sender === 'user' ? styles.userMessage : styles.otherMessage}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
        
        <View style={styles.headerBottom}>
          <TextInput
            style={styles.input}
            placeholder='Type your message...'
            value={newMessage}
            onChangeText={(text) => setNewMessage(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Image
              source={require('../../assets/icons/send.png')} 
              style={styles.send}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#f5c5ad',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 50,
    alignItems: 'center',

  },
  headerImage: {
    width: 60,
    height: 60, 
    marginRight: 10,
    marginTop: 10,
    borderRadius: 50,
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#f5c5ad',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    
    fontWeight: 'bold',
  },

  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#8E70F5',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '80%',
    marginRight: 15,
  },
  appTitle: {
    fontSize: 13,
    marginBottom: 1,
    textAlign: 'center',
    color: '#000000',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCD7EA',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    marginTop: 16,
    maxWidth: '80%',
    marginLeft: 15,
  },
  messageText: {
    color: '#000',
    fontSize: 18
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    //flex: 1,
    //borderWidth: 1,
    borderColor: '#ffb6c1',
    borderRadius: 25,
    padding: 15,
    marginRight: 18,
    width: 260,
    backgroundColor: '#fff'
  },
  sendButton: {
    backgroundColor: '#8E70f5',
    padding: 11,
    borderRadius: 30,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  arrow: {
    width: 30,
    height: 30,
  },
  send: {
    width: 25,
    height: 25,
  },
  convoText: {
    color: '#777',
    marginTop: 15,
    textAlign: 'center',
  }
});
