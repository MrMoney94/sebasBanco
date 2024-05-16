import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ItemCard} from '../../molecules/home/itemCard';
import {EmptyList} from '../../molecules/home/emptyList';
import {IProduct} from '../../../interface/global';

type Props = {
  data: Array<IProduct>;
  onPress: (data: IProduct) => void;
};

export const ItemListOrganism: React.FC<Props> = ({data, onPress}) => {
  return (
    <View style={styles.fl}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ItemCard
            id={item.id}
            name={item.name}
            onPress={() => onPress(item)}
          />
        )}
        ListEmptyComponent={<EmptyList />}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={3}
        getItemLayout={(_, index) => ({
          length: 70,
          offset: 70 * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fl: {
    flex: 1,
  },
});
