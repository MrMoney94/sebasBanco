import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from '../../molecules/global/header';
import {SearchBar} from '../../molecules/global/searchBar';
import {ItemListOrganism} from '../../organisms/home/itemListOrganism';
import {Footer} from '../../organisms/home/footer';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {GlobalStateContext} from '../../../reducer/GlobalState';
import Skeleton from '../../molecules/global/skeleton';
import {IProduct} from '../../../interface/global';

const HomeTemplate = () => {
  const {navigate} = useNavigation<NavigationProp<any, any>>();
  const [state] = useContext(GlobalStateContext);
  const [product, setProducts] = useState<Array<IProduct> | null>(null);

  const search = (query: string) => {
    return state?.products.filter(
      (item: any) =>
        item.id.toLowerCase().includes(query.toLowerCase()) ||
        item.name.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const onSearchChange = (e: string): void => {
    const newResult = search(e);
    setProducts(newResult);
  };

  return (
    <View style={styles.fl}>
      <Header title="BANCO" />
      <SearchBar placeholder="Buscar" onChangeText={onSearchChange} />
      {!state?.isLoading ? (
        <ItemListOrganism
          data={product ?? state.products}
          onPress={(data: IProduct) => navigate('product', {data: data})}
        />
      ) : (
        <View style={styles.fl}>
          <Skeleton duration={1000} />
        </View>
      )}
      <Footer onPress={() => navigate('add')} />
    </View>
  );
};

const styles = StyleSheet.create({
  fl: {
    flex: 1,
  },
});

export default HomeTemplate;
