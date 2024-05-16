import React from 'react';
import {View, StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Colors} from '../../../utils/colors';

type Props = TextInputProps & {
  placeholder: string;
};

export const SearchBar: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    fontSize: 15,
    color: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.soft_dark,
    marginHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
});
