import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { config } from 'dotenv'
// USE GROQ https://console.groq.com/playground
const GPT = () => {

    const fetch = () => {
        console.log(process.env.API_KEY)

    }

      useEffect(() => {
        fetch();
    }, []);
    return (
        
        <Text>ChatGPT</Text>
    );
};

export default GPT;
