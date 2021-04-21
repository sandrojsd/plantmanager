import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, 
  View } from 'react-native';

import Button from '../components/Button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Confirmation() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
            <Text style={styles.emoji}>
             😀
            </Text>
            <Text style={styles.title}>
              Prontinho
            </Text> 
            <Text style={styles.subtitle}>
              Agora vamos começar a cuidar das suas
              plantinhas com muito cuidado.
            </Text> 
          <View style={styles.footer}>
            <Button title="Começar" />
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-around',
  },

  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center'
  },

  emoji: {
    fontSize: 78,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
  },

  

  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 75,
  },

});