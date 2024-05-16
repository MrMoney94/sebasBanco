import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import EditTemplate from '../../templates/product/edit';

const EditScreen = () => {
  return (
    <SafeAreaView style={styles.fl}>
      <EditTemplate />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fl: {
    flex: 1,
  },
});

export default EditScreen;
