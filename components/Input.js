/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({
  placeholder,
  placeholderTextColor,
  onChange,
  inputStyle,
  value,
  secureTextEntry,
  autoCompleteType,
  autoCapitalize,
  onChangeText,
  defaultValue,
  name,
}) => {
  return (
    <TextInput
      style={[styles.input, inputStyle]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChange={onChange}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
      autoCompleteType={autoCompleteType}
      autoCapitalize={autoCapitalize}
      defaultValue={defaultValue}
      name={name}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 40,
    width: '90%',
    height: 45,
    padding: 10,
    paddingStart: 15,
  },
});
