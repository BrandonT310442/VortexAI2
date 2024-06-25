import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SizableText, Button, Card, H2, H3, Image, Paragraph, XStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import Prodia from './Prodia';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToGPT = () => {
    navigation.navigate('GPT');
  };

  
  const goToProdia = () => {
    navigation.navigate('Prodia');
  };


  return (
    <View style={styles.container}>
      <SizableText
        color="$black"
        fontFamily="$body"
        fontSize={60}
        fontWeight="500"
        hoverStyle={{
          color: '$colorHover',
        }}
        style={styles.headingOne}
      >
        Vortex AI
      </SizableText>

      <SizableText
        color="$black"
        fontFamily="$body"
        fontSize={25}
        fontWeight="250"
        hoverStyle={{
          color: '$colorHover',
        }}
        style={styles.text}
      >
        The Most Powerful AI App
      </SizableText>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Header padded>
              <H3>ChatGPT</H3>
              <Paragraph theme="alt2">Powered by GPT 4.0</Paragraph>
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

          <Card style={styles.card}>
            <Card.Header padded>
            <H3>Image Generation</H3>
            <Paragraph theme="alt2">Genearte Images From Your Text</Paragraph>
            </Card.Header>
            <Card.Footer padded>
              <XStack flex={1} />
              <Button onPress={goToProdia} borderRadius="$10">Continue</Button>
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

          <Card style={styles.card}>
            <Card.Header padded>
            <H3>ChatGPT</H3>
            <Paragraph theme="alt2">Another description</Paragraph>
            </Card.Header>
            <Card.Footer padded>
              <XStack flex={1} />
              <Button onPress={() => {}} borderRadius="$10">Another Action</Button>
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
          <Card style={styles.card}>
            <Card.Header padded>
            <H3>ChatGPT</H3>
            <Paragraph theme="alt2">Another description</Paragraph>
            </Card.Header>
            <Card.Footer padded>
              <XStack flex={1} />
              <Button onPress={() => {}} borderRadius="$10">Another Action</Button>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'flex-start', // Align items at the top
    paddingHorizontal: 20, // Add some horizontal padding
    marginTop:100,
  },
  headingOne: {
    marginTop: 50, // Add top margin
    marginBottom: 20, // Space out the heading and subheading
    textAlign: 'center',
  },
  text: {
    zIndex: 1, // Ensure the text is above the gradient
    textAlign: 'center', // Center the text
  },
  scrollContainer: {
    alignItems: 'center', // Center the scroll view content horizontally
    paddingTop: 20, // Add padding at the top
  },
  cardContainer: {
    flexDirection: 'row', // Arrange children in a row
    flexWrap: 'wrap', // Wrap to next line when necessary
    justifyContent: 'center', // Center the cards horizontally
    alignItems: 'center', // Center the cards vertically
    marginTop: 20, // Space above the card container
  },
  card: {
    margin: 10, // Space between cards
    width: (Dimensions.get('window').width / 2) - 40, // Adjust card width to fit two per row with margin
  }
});

export default HomeScreen;
