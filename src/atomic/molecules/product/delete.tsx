import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {CustomButton} from '../../atoms/customButton';
import {Colors} from '../../../utils/colors';
import {BottomSheet} from '../../../components/bottomSheet';

type Props = {
  name: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export const DeleteView: React.FC<Props> = ({name, onCancel, onConfirm}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.closeContainer}
        onPress={() => BottomSheet.close()}>
        <Text style={styles.closeFont}>X</Text>
      </Pressable>
      <View style={styles.containerQuestion}>
        <Text style={styles.fontQuestion}>
          ¿Estás seguro que quieres eliminar el producto {name}?
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton title="Confirmar" onPress={() => onConfirm?.()} />
        <CustomButton
          title="Cancelar"
          onPress={() => onCancel?.()}
          color={Colors.soft_dark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeContainer: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: Colors.soft_dark,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  closeFont: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  containerQuestion: {
    flex: 1,
  },
  fontQuestion: {
    marginVertical: 20,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
