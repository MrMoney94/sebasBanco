import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomButton} from '../../atoms/customButton';

type Props = {
  onPress: () => void;
};

export const Footer: React.FC<Props> = ({onPress}) => {
  return (
    <View style={styles.emptyListContainer}>
      <CustomButton title="Agregar" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
});
