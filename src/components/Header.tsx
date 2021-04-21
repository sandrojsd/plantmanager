import React from 'react';
import { StyleSheet, Text,View, Image } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper' 
import userImg from '../assets/alexsandro.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}> Olá </Text>
        <Text style={styles.userName}> {title} </Text>
      </View>
      <Image source={userImg} style={styles.avatar} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',  
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight(),
  },

  greeting: {
    fontSize: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  userName: {
    fontSize: 20,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 30,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  }
});