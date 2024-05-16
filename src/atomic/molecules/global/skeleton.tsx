import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import { Colors } from '../../../utils/colors';

interface SkeletonProps {
  duration: number;
}

const Skeleton: React.FC<SkeletonProps> = ({duration}) => {
  const translateX = new Animated.Value(-100);

  React.useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(translateX, {
        toValue: 400,
        duration: duration,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, []);

  const backgroundInterpolation = translateX.interpolate({
    inputRange: [-100, 400],
    outputRange: ['#E0E0E0', '#FFFFFF'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Animated.View
          style={[
            styles.text,
            {
              width: 200,
              height: 20,
              marginBottom: 8,
              backgroundColor: backgroundInterpolation,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.text,
            {width: 150, height: 20, backgroundColor: backgroundInterpolation},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.soft_dark,
    marginHorizontal: 25,
    borderRadius: 10,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    borderRadius: 4,
    marginBottom: 4,
  },
});

export default Skeleton;
