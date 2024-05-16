import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  PressableProps,
  ActivityIndicator,
} from 'react-native';
import {widthSize} from '../../utils/viewport';
import {Colors} from '../../utils/colors';

type Props = PressableProps & {
  title: string;
  loading?: boolean;
  color?: string;
};

export const CustomButton: React.FC<Props> = props => {
  return !props.loading ? (
    <Pressable
      style={[
        styles.buttonStyle,
        {backgroundColor: props.color ?? Colors.secondary},
      ]}
      {...props}>
      <Text style={styles.font}>{props.title}</Text>
    </Pressable>
  ) : (
    <ActivityIndicator size="small" color={Colors.primary} />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 12,
    width: widthSize / 1.2,
    borderRadius: 10,
    marginVertical: 5,
  },
  font: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 6,
  },
});
