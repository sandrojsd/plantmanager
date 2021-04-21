
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export default function EnviromentButton({title, active = false, ...rest}: EnviromentButtonProps) {
  return (
    <RectButton style={[
          styles.button,
          active && styles.buttonActived ]} {...rest}>
        <Text style={[
          styles.textbutton,
          active && styles.textbuttonActived ]}> {title} </Text>
      </RectButton>
  );
}

const styles = StyleSheet.create({
   button: {
    backgroundColor: colors.shape,
    paddingVertical: 7,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height:40,
    width: 100,
    marginHorizontal: 7,
  },

  buttonActived: {
    backgroundColor: colors.green_light,
  },

  textbutton: {
    color: colors.heading,
    fontFamily: fonts.text
  },

  textbuttonActived: {
    color: colors.green_dark,
  }
});