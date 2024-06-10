import React from 'react';

import { View, StyleSheet, Dimensions } from 'react-native';
import { SizableText, Button, Card, H2, Image, Paragraph, XStack, CardProps } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToGPT = () => {
    navigation.navigate('GPT');
  };
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={['#2B4162', '#12100E']}
        start={[0, 1]}
        end={[0, 0]}
      /> */}
      <SizableText
        // can add theme values
        color="$black"
        fontFamily="$body"
        // or just use direct values
        fontSize={60}
        fontWeight="500"
        hoverStyle={{
          color: '$colorHover',
        }}
      >
        Vortex AI
      </SizableText>

      <SizableText
        // can add theme values
        color="$black"
        fontFamily="$body"
        // or just use direct values
        fontSize={25}
        fontWeight="250"
        hoverStyle={{
          color: '$colorHover',
        }}
        style={styles.text}
      >
The Most Powerful AI App
      </SizableText>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <Card
      style={styles.card}
      >
      <Card.Header padded>
        <H2>ChatGPT</H2>
        <Paragraph theme="alt2">Powered by GPT 4.0o</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button onPress={goToGPT} borderRadius="$10">Continue</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
          }}
        />
      </Card.Background>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  headingOne: {
    flex: 1, // Take up the full screen
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  }, 
  text: {
    zIndex: 1, // Ensure the text is above the gradient
    marginTop: 50, // Additional margin if needed
  },
  card: {
    marginLeft: 0, 
  }

});

export default HomeScreen;
