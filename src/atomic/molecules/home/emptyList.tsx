import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const EmptyList: React.FC = () => {
  return (
    <View style={styles.emptyListContainer}>
      <Text>No hay productos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
  },
});
