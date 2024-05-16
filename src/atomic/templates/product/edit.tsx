import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Header} from '../../molecules/global/header';
import {RouteProp, useRoute} from '@react-navigation/native';
import FormUpdateOrganism from '../../organisms/product/formUpdate';

const EditTemplate = () => {
  const {params} = useRoute<RouteProp<any, any>>();

  return (
    <View style={styles.fl}>
      <Header title="BANCO" btnBack={true} />
      <Text style={styles.fontTitle}>Formulario de Registro</Text>
      <FormUpdateOrganism {...params?.data} />
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

export default EditTemplate;
