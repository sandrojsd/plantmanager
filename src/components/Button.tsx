import React from 'react';
import { StyleSheet, Text,TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
        <Text style={styles.textbutton}> {title} </Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
   button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height:56,
  },

  textbutton: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
});