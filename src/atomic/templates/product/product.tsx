import React, {useContext, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Header} from '../../molecules/global/header';
import {
  useRoute,
  RouteProp,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import {TopTitle} from '../../organisms/product/topTitle';
import {ExtraInfo} from '../../organisms/product/extraInfo';
import {CustomButton} from '../../atoms/customButton';
import {BottomSheet} from '../../../components/bottomSheet';
import {DeleteView} from '../../molecules/product/delete';
import {DeleteProduct} from '../../../core';
import {GlobalStateContext} from '../../../reducer/GlobalState';
import {PRODUCTS} from '../../../reducer/types';
import {Colors} from '../../../utils/colors';

const ProductTemplate = () => {
  const [state, dispatch] = useContext(GlobalStateContext);
  const {params} = useRoute<RouteProp<any, any>>();
  const {navigate} = useNavigation<NavigationProp<any, any>>();
  const [loading, setLoading] = useState<boolean>(false);

  const confirmDelete = () => {
    (async () => {
      setLoading(true);
      BottomSheet.close();
      const productUpdate = state?.products.filter(
        product => product?.id !== params?.data?.id,
      );
      await DeleteProduct({id: params?.data?.id});
      dispatch({
        type: PRODUCTS,
        data: {products: productUpdate},
      });
      setLoading(false);
      navigate('home');
    })();
  };

  const onSwipeUp = () => {
    BottomSheet.show({
      title: 'Receta médica',
      content: (
        <DeleteView
          name={params?.data?.name}
          onCancel={() => BottomSheet.close()}
          onConfirm={() => confirmDelete()}
        />
      ),
    });
  };

  return (
    <View style={styles.fl}>
      <Header title="BANCO" btnBack={true} />
      <TopTitle id={params?.data?.id} />
      <ExtraInfo {...params?.data} />
      {!loading ? (
        <View style={styles.btns}>
          <CustomButton
            title="Editar"
            onPress={() => navigate('edit', {data: params?.data})}
          />
          <CustomButton title="Eliminar" color="#FF0000" onPress={onSwipeUp} />
        </View>
      ) : (
        <View style={styles.btns}>
          <ActivityIndicator size="small" color={Colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fl: {
    flex: 1,
  },
  btns: {
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default ProductTemplate;
