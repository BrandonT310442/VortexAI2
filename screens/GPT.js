import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input, TextArea, XStack, YStack } from 'tamagui';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import { GROQ_API_KEY } from '@env';
import Groq from "groq-sdk";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome' 
import ChatBubble from '../components/ChatBubble'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
const groq = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama3-8b-8192",
  });
}

const GPT = () => {
  useEffect(() => {
    // main()
  }, []);

  return (
    <View style={styles.outerContainer}>
   
   <ChatBubble />
      <View style={styles.container}>
        <YStack
          minHeight={250}
          overflow="hidden"
          space="$2"
          margin="$3"
          padding="$2"
          flex={1}
        >
          {/* Other content can go here */}
        </YStack>
        <XStack style={styles.inputWrapper}>
          <Input style={styles.input} flex={1} size={2} placeholder="Ask me anything..." />
          <TouchableOpacity style={styles.iconButton} onPress={() => { /* Add your onPress logic here */ }}>
          <FontAwesomeIcon icon={faPaperPlane} />                   
           </TouchableOpacity>
        </XStack>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1, // This makes the outer container take up the whole screen
  },
  textContainer: {
    padding: 16, // Add some padding around the text
  },
  container: {
    flex: 1, // This makes the container take up the whole screen
    justifyContent: 'space-between', // This pushes the input to the bottom
  },
  inputWrapper: {
    flexDirection: 'row', // Ensure the input and button are in a row
    padding: 16, // Add some padding around the input
    width: '100%', // Ensure it takes up the full width
    alignItems: 'center', // Center align the items vertically
  },
  input: {
    flex: 1, // Ensure the input takes up available space
  },
  iconButton: {
    marginLeft: 10, // Add some space between the input and the button
  },
});

export default GPT;
