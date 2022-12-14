/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Submit = props => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: props.color}]}>
      <Text style={styles.submitText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Submit;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderColor: 'blue',
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 0,
  },
  submitText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
