import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/core';
import { StyleSheet, Text, SafeAreaView, 
  View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import Button from '../components/Button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlue(){
    setIsFocused(false);
    setIsFilled(!!name);
  };

  function handleInputfocus(){
    setIsFocused(true);
  };

  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value);
  };


  function handleGoToConfirmation(){
    navigation.navigate('Confirmation');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.header}>
            <Text style={styles.emoji}>
               {isFilled ? '😄' : '😀'} 
            </Text>
            <Text style={styles.title}>
              Como podemos {'\n'} chamar você?
            </Text>
          </View>
          <TextInput 
            style={[styles.input,
              (isFocused || isFilled) && {
                borderColor: colors.green
              }
            ]} 
            placeholder="Digite o nome"
            onBlur={handleInputBlue}
            onFocus={handleInputfocus}
            onChangeText={handleInputChange}
          />
            <View style={styles.footer}>
              <Button title="Confirmar"  onPress={handleGoToConfirmation}/>
            </View>
        </View>        
      </View>
      </KeyboardAvoidingView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center'
  },

  content: {
    flex: 1,
    width: '100%',
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
    width: '100%'
  },

  header: {
    alignItems: 'center'
  },

  emoji: {
    fontSize: 44,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },

  

  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },

});