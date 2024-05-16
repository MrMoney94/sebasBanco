import React from 'react';
import renderer from 'react-test-renderer';
import {TextInput} from 'react-native';
import {Input} from '../src/atomic/atoms/input';

describe('Input Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input placeholder="Enter text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<TextInput>();
    renderer.create(<Input ref={ref} placeholder="Enter text" />);
    expect(ref.current).not.toBeNull();
  });

  it('applies custom styles', () => {
    const customStyle = {borderWidth: 1, borderColor: 'red'};
    const tree = renderer
      .create(<Input style={customStyle} placeholder="Enter text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
