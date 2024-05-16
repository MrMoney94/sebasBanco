import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {CustomButton} from '../../atoms/customButton';
import {Colors} from '../../../utils/colors';

type Props = {
  onPress: () => void;
  onReset: () => void;
  loading?: boolean;
};

export const Footer: React.FC<Props> = ({
  onPress,
  onReset,
  loading = false,
}) => {
  const [isKeyboardActive, setIsKeyboardActive] = useState<boolean>(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardActive(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardActive(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return !isKeyboardActive ? (
    <View style={styles.emptyListContainer}>
      <CustomButton title="Enviar" onPress={onPress} loading={loading} />
      <CustomButton
        title="Reiniciar"
        color={Colors.soft_dark}
        onPress={onReset}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  emptyListContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
});
