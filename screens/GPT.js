import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GROQ_API_KEY } from '@env';
// USE GROQ https://console.groq.com/playground

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true});

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
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

    const fetch = () => {
        console.log( GROQ_API_KEY )

    }

    

      useEffect(() => {
        fetch();
        main()
    }, []);
    return (
        
        <Text>ChatGPT</Text>
    );
};

export default GPT;
