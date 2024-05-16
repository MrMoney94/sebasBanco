import React, {
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  Animated,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
} from 'react-native';
import {BottomSheetRef} from '../model';
import {BottomSheetController} from '../controller';
import {Colors} from '../../../utils/colors';
import {heightSize} from '../../../utils/viewport';

const BottomSheet = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheetRef>();
  const translateY = useRef(new Animated.Value(0)).current;
  const [content, setContent] = useState<React.ReactNode>();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (
        evt: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        // El usuario ha empezado a interactuar con la pantalla
      },
      onPanResponderMove: (
        evt: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        // El usuario está moviendo el dedo por la pantalla
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (
        evt: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        // El usuario ha levantado el dedo de la pantalla
        if (gestureState.dy > 150) {
          hide();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  useLayoutEffect(() => {
    BottomSheetController.setBottomSheetRef(bottomSheetRef);
  }, []);

  useImperativeHandle(bottomSheetRef, () => ({
    show: (e: any) => {
      setContent(e.content);
      translateY.setValue(0);
      onShowModal();
    },
    close: () => {
      hide();
    },
  }));

  const onShowModal = () => {
    setVisible(true);

    translateY.setValue(heightSize / 1.4);

    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const hide = () => {
    Animated.timing(translateY, {
      toValue: heightSize / 1.4,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  };

  const bottomSheetStyle = {
    ...styles.modal,
    transform: [
      {
        translateY: translateY,
      },
    ],
  };

  return (
    <Modal visible={visible} transparent={true} animationType="none">
      <View style={styles.container}>
        <Pressable style={styles.backdrop} onPress={() => hide()} />
        <Animated.View style={bottomSheetStyle}>
          <Animated.View
            style={styles.lineContainer}
            {...panResponder.panHandlers}>
            <View style={styles.line} />
          </Animated.View>
          <View style={{flex: 1}}>{content}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  backdrop: {
    backgroundColor: '#000',
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 10,
  },
  modal: {
    backgroundColor: '#fff',
    zIndex: 100,
    height: heightSize / 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  lineContainer: {
    paddingVertical: 3,
  },
  line: {
    backgroundColor: Colors.soft_dark,
    height: 6,
    width: 50,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 12,
  },
});
