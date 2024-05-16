import React from 'react';
import {StyleSheet, Text, TextInputProps, View} from 'react-native';
import {Input} from '../../atoms/input';
import {Colors} from '../../../utils/colors';

type Props = {
  label: string;
  isValid: boolean;
  errorName: string;
  disabled?: boolean;
};

export const CustomInput: React.FC<Props & TextInputProps> = ({
  label,
  isValid,
  errorName,
  disabled = false,
  ...textInputProps
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Input
        {...textInputProps}
        style={[
          styles.input,
          !isValid && styles.inputError,
          disabled ? styles.disable : null,
        ]}
      />
      {!isValid && <Text style={styles.errorText}>{errorName}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  label: {
    fontSize: 15,
    paddingLeft: 5,
    color: Colors.primary,
    fontWeight: '500',
  },
  input: {
    borderColor: Colors.soft_dark,
    borderRadius: 5,
    borderWidth: 1,
    height: 55,
    fontSize: 16,
    paddingHorizontal: 15,
    color: '#4c669f',
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  disable: {
    borderColor: Colors.soft_dark,
    opacity: 0.2,
  },
});
