import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  // Delete Last Character
  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

 

  return (
    <View style={styles.container}>

      {/* Editable Display */}
      <TextInput
        style={styles.display}
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
        placeholder="0"
        placeholderTextColor="#888"
      />

      <View style={styles.row}>
        <CalcButton title="7" onPress={() => handlePress('7')} />
        <CalcButton title="8" onPress={() => handlePress('8')} />
        <CalcButton title="9" onPress={() => handlePress('9')} />
        <CalcButton title="/" onPress={() => handlePress('/')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="4" onPress={() => handlePress('4')} />
        <CalcButton title="5" onPress={() => handlePress('5')} />
        <CalcButton title="6" onPress={() => handlePress('6')} />
        <CalcButton title="*" onPress={() => handlePress('*')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="1" onPress={() => handlePress('1')} />
        <CalcButton title="2" onPress={() => handlePress('2')} />
        <CalcButton title="3" onPress={() => handlePress('3')} />
        <CalcButton title="-" onPress={() => handlePress('-')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="0" onPress={() => handlePress('0')} />
        <CalcButton title="DEL" onPress={deleteLast} />
        <CalcButton title="C" onPress={clear} />
        <CalcButton title="+" onPress={() => handlePress('+')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="=" onPress={calculate} />
      </View>

    </View>
  );
}

const CalcButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
    padding: 10,
  },
  display: {
    fontSize: 40,
    color: '#fff',
    backgroundColor: '#111',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
