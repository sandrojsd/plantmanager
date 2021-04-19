import React from 'react';
import { StyleSheet, Text,TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
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
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  textbutton: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  }
});