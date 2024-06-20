import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Button, Input, TextArea, XStack, YStack } from 'tamagui';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import { GROQ_API_KEY } from '@env';
import Groq from "groq-sdk";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome' 
import ChatBubble from 'react-native-chat-bubble';
import { SizableText } from 'tamagui';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
const groq = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true });

export async function main(content) {
  const chatCompletion = await getGroqChatCompletion(content);
 return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama3-8b-8192",
  });
}
const GPT = () => {
  const [message, setMessage] = useState('');
  const [components, setComponents] = useState([]);

  const handleMessage = async () => {
    console.log("Message sent: ", message);
    addComponent(true, message);

    const returnMsg = await main(message); 
    addComponent(false, returnMsg);

    console.log("Response received: ", returnMsg);
    setMessage('');
  }

  const addComponent = (isOwnMessage, content) => {
    setComponents(prevComponents => [
      ...prevComponents,
      { isOwnMessage, content }
    ]);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {components.map((comp, index) => (
          <ChatBubble
            key={index}
            isOwnMessage={comp.isOwnMessage}
            bubbleColor={comp.isOwnMessage ? '#1084ff' : '#e1e1e1'}
            tailColor={comp.isOwnMessage ? '#1084ff' : '#e1e1e1'}
            withTail={true}
            onPress={() => console.log("Bubble Pressed!")}
          >
      <SizableText
        // can add theme values
        color={comp.isOwnMessage ? '#FFFFFF' : '#000000'}
        fontFamily="$body"
        // or just use direct values
        fontWeight="350"
        hoverStyle={{
          color: '$colorHover',
        }}
      >
        {comp.content}
      </SizableText>
          </ChatBubble>
        ))}
      </ScrollView>
      
      <XStack style={styles.inputWrapper}>
        <Input
          style={styles.input}
          size={2}
          placeholder="Ask me anything..."
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={handleMessage}
        />
        <TouchableOpacity style={styles.iconButton} onPress={handleMessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </TouchableOpacity>
      </XStack>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default GPT;
