import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../../../utils/colors';
import {IProduct} from '../../../interface/global';
import {FontDescription} from '../../molecules/product/fontDescription';

export const ExtraInfo: React.FC<IProduct> = ({
  name,
  description,
  logo,
  date_release,
  date_revision,
}) => {
  return (
    <View style={styles.container}>
      <FontDescription name="Nombre" description={name} />
      <FontDescription name="Descripción" description={description} />
      <Text style={styles.fontLogo}>Logo</Text>
      <Image source={{uri: logo}} style={styles.img} />
      <FontDescription
        name="Fecha liberación"
        description={date_release.split('T')[0]}
      />
      <FontDescription
        name="Fecha revisión"
        description={date_revision.split('T')[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  fontId: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.primary,
  },
  fontLogo: {
    fontSize: 16,
    marginVertical: 5,
    color: Colors.primary,
  },
  img: {
    width: '100%',
    height: 180,
    objectFit: 'scale-down',
    marginVertical: 5,
  },
});
