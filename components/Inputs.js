/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

class Inputs extends Component {
  state = {isFocused: false};

  onFocusChange = () => {
    this.setState({isFocused: true});
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {borderColor: this.state.isFocused ? '#0779ef' : '#eee'},
        ]}>
        <Input
          placeholder={this.props.name}
          onFocus={this.onFocusChange}
          inputContainerStyle={styles.inputContainer}
          inputStyl={styles.inputText}
          selectTextEntry={this.props.pass}
          leftIcon={
            <FontAwesome
              name={this.props.icon}
              size={22}
              color={this.state.isFocused ? '#0779e4' : 'grey'}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 55,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 3.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
});

export default Inputs;
