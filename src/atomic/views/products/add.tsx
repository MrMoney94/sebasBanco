import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AddTemplate from '../../templates/product/add';

const AddScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddTemplate />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddScreen;
