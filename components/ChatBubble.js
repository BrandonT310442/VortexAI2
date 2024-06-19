import React, { useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const chatBubble = () => {
    return (
        <FlatList
          style={{ backgroundColor: "#eeeeee" }}
          
          renderItem={({ item, index }) => {
            // Placeholder for your logic to determine if the message is sent or received
            // const SENT_MESSAGE = item.sent;
  
            // if (SENT_MESSAGE) {
              return (
                <View
                  style={{
                    backgroundColor: "#0078fe",
                    padding: 10,
                    marginLeft: '45%',
                    borderRadius: 5,
                    marginTop: 5,
                    marginRight: "5%",
                    maxWidth: '50%',
                    alignSelf: 'flex-end',
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#fff" }}>
            TEST
                  </Text>
                  <View style={styles.rightArrow}></View>
                  <View style={styles.rightArrowOverlap}></View>
                </View>
              );
            // } else {
            //   return (
            //     <View
            //       style={{
            //         backgroundColor: "#dedede",
            //         padding: 10,
            //         borderRadius: 5,
            //         marginTop: 5,
            //         marginLeft: "5%",
            //         maxWidth: '50%',
            //         alignSelf: 'flex-start',
            //         borderRadius: 20,
            //       }}
            //       key={index}
            //     >
            //       <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }} key={index}>
            //         {item.text}
            //       </Text>
            //       <View style={styles.leftArrow}></View>
            //       <View style={styles.leftArrowOverlap}></View>
            //     </View>
            //   );
            // }
        }}
      />
    )
}

const styles = StyleSheet.create({
    rightArrow: {
      position: "absolute",
      backgroundColor: "#0078fe",
      //backgroundColor:"red",
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomLeftRadius: 25,
      right: -10
    },
    
    rightArrowOverlap: {
      position: "absolute",
      backgroundColor: "#eeeeee",
      //backgroundColor:"green",
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomLeftRadius: 18,
      right: -20
    
    },
    
    /*Arrow head for recevied messages*/
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },
    
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "#eeeeee",
        //backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20
    
    },
    })
export default chatBubble;


