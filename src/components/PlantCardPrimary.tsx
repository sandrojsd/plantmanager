
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {SvgFromUri} from 'react-native-svg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export default function PlantCardPrimary({data, ...rest}: PlantProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
        <Text style={styles.text}> {data.name} </Text>
      </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shape,
    maxWidth: '50%',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },

  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16
  },
});