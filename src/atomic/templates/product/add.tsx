import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../molecules/global/header';
import {Colors} from '../../../utils/colors';
import FormOrganism from '../../organisms/product/form';

const AddTemplate = () => {
  return (
    <View style={styles.fl}>
      <Header title="BANCO" btnBack={true} />
      <Text style={styles.fontTitle}>Formulario de Registro</Text>
      <FormOrganism />
    </View>
  );
};

const styles = StyleSheet.create({
  fl: {
    flex: 1,
  },
  fontTitle: {
    fontSize: 25,
    color: Colors.primary,
    fontWeight: '700',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});

export default AddTemplate;
