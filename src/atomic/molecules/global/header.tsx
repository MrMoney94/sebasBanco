import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../../utils/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ChevronLeft} from '../../../icons';
import {SvgXml} from 'react-native-svg';

type Props = {
  title: string;
  btnBack?: boolean;
};

export const Header: React.FC<Props> = ({title, btnBack}) => {
  const {goBack} = useNavigation<NavigationProp<any, any>>();

  return (
    <View style={styles.container}>
      {btnBack ? (
        <Pressable style={styles.backPress} onPress={() => goBack()}>
          <SvgXml
            xml={ChevronLeft}
            fill={Colors.primary}
            width={15}
            height={15}
          />
        </Pressable>
      ) : null}
      <Text style={styles.fontTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.soft_dark,
  },
  fontTitle: {
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: 15,
    color: Colors.primary,
  },
  backPress: {
    position: 'absolute',
    left: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontBack: {
    fontSize: 18,
    fontWeight: '600',
  },
});
