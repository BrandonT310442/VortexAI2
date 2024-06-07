import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SizableText } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

const HomeScreen = () => {
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
        // style={styles.text}
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
All 4 GPT's in 1 App
      </SizableText>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  text: {
    zIndex: 1, // Ensure the text is above the gradient
    marginTop: 50, // Additional margin if needed
  },
});

export default HomeScreen;
