import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';

type Props = {
  name: string;
  description: string;
};

export const FontDescription: React.FC<Props> = ({description, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.fontContainer}>
        <Text style={[styles.font, styles.fontName]}>{name}</Text>
      </View>
      <View style={styles.fontContainer}>
        <Text style={[styles.font, styles.fontDescription]}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  fontContainer: {
    flex: 1,
  },
  font: {
    color: Colors.primary,
    fontSize: 16,
  },
  fontName: {
    fontWeight: '400',
  },
  fontDescription: {
    fontWeight: '600',
  },
});
