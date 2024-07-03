import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Button, Input, TextArea, XStack, YStack } from 'tamagui';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import { GROQ_API_KEY } from '@env';
import Groq from "groq-sdk";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ChatBubble from 'react-native-chat-bubble';
import { SizableText } from 'tamagui';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { HG_API_KEY } from '@env';

export async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
            headers: {
                Authorization: `Bearer ${HG_API_KEY}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64data = reader.result;
            resolve(base64data); // Resolve the promise with the base64 string
        };
        reader.onerror = reject;
        reader.readAsDataURL(result);
    });
}

const Dalle = () => {
    const [message, setMessage] = useState('');
    const [components, setComponents] = useState([]);

    const handleMessage = async () => {
        console.log("Message sent: ", message);
        addComponent(true, message);

        const returnMsg = await query({ "inputs": message });

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
                        {comp.content.startsWith('data') ? (
                            <Image
                                source={{ uri: comp.content }}
                                style={styles.image}
                            />
                        ) : (
                            <SizableText
                                color={comp.isOwnMessage ? '#FFFFFF' : '#000000'}
                                fontFamily="$body"
                                fontWeight="350"
                                hoverStyle={{
                                    color: '$colorHover',
                                }}
                            >
                                {comp.content}
                            </SizableText>
                        )}
                    </ChatBubble>
                ))}
            </ScrollView>

            <XStack style={styles.inputWrapper}>
                <Input
                    style={styles.input}
                    size={2}
                    placeholder="Imagine anything..."
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
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default Dalle;
