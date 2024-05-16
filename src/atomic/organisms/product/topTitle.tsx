import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';

type Props = {
  id: string;
};

export const TopTitle: React.FC<Props> = ({id}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontId}>ID: {id}</Text>
      <Text style={styles.fontInfo}>Información extra</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  fontId: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.primary,
  },
  fontInfo: {
    fontSize: 12,
    color: Colors.primary,
  },
});
