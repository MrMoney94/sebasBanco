import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ProductTemplate from '../../templates/product/product';

const ProductScreen = () => {
  return (
    <SafeAreaView style={styles.fl}>
      <ProductTemplate />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fl: {
    flex: 1,
  },
});

export default ProductScreen;
