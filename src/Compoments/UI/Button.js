import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Button = (props)=> {
  const {onPress, text, color} = props;
  return (
    
      <Pressable style={styles.button} onPress={onPress} backgroundColor={color}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
   
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal:32,
    borderRadius: 15,
    marginTop:10,
    marginLeft:35,
    marginRight:35

    
   
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Button;
