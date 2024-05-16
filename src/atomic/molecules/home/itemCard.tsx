import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../../utils/colors';
import {ChevronRigth} from '../../../icons';
import {SvgXml} from 'react-native-svg';

type Props = {
  id: string;
  name: string;
  onPress: (id: string) => void;
};

export const ItemCard: React.FC<Props> = ({id, name, onPress}) => (
  <Pressable onPress={() => onPress(id)}>
    <View style={styles.container}>
      <View>
        <Text style={styles.fontName}>{name}</Text>
        <Text>ID: {id}</Text>
      </View>
      <View>
        <SvgXml
          xml={ChevronRigth}
          fill={Colors.soft_dark}
          width={12}
          height={12}
        />
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 70,
    marginHorizontal: 25,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: Colors.soft_dark,
  },
  fontName: {
    fontWeight: '700',
    fontSize: 15,
    color: Colors.primary,
  },
});
