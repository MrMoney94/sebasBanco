import React from 'react';
import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';

export const Input = React.forwardRef<TextInput, TextInputProps>(
  (props, ref) => {
    return (
      <View>
        <View style={styles.container}>
          <TextInput ref={ref} {...props} />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 15,
  },
});
