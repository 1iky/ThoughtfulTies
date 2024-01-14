import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const autoResponses = [
    'Hello',
    'How are you?',
    'I\'m good',
    'I like knitting',
    'What\'s yours hobbies',
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
          <TouchableOpacity onPress={() => alert('Back')}>
            <Text style={styles.headerText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Image
              source={require('./images/di9rb8p5T.jpg')} 
              style={styles.headerImage}
            />
            <Text style={styles.headerText}>Bob Ross</Text>
          </View>
          <TouchableOpacity onPress={() => alert('Map')}>
            <Text style={styles.headerText}>Map</Text>
          </TouchableOpacity>
        </View>
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
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    alignItems: 'center',
  },
  headerImage: {
    width: 50,
    height: 50, 
    marginRight: 10,
    borderRadius: 50,
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5c5ad',
  },
  headerText: {
    color: '#fff',
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
    marginRight: 5,
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
    maxWidth: '80%',
    marginLeft: 5,
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ffb6c1',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff'
  },
  sendButton: {
    backgroundColor: '#8E70f5',
    padding: 10,
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
