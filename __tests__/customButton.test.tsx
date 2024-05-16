import React from 'react';
import renderer from 'react-test-renderer';
import {Pressable} from 'react-native';
import {CustomButton} from '../src/atomic/atoms/customButton';
import {Colors} from '../src/utils/colors';

describe('CustomButton', () => {
  it('renders correctly when not loading', () => {
    const tree = renderer.create(<CustomButton title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when loading', () => {
    const tree = renderer
      .create(<CustomButton title="Press me" loading={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the correct background color', () => {
    const tree = renderer
      .create(<CustomButton title="Press me" color={Colors.primary} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles press events', () => {
    const onPressMock = jest.fn();
    const tree = renderer.create(
      <CustomButton title="Press me" onPress={onPressMock} />,
    );
    // Usa el componente importado Pressable
    tree.root.findByType(Pressable).props.onPress();
    expect(onPressMock).toHaveBeenCalled();
  });
});
