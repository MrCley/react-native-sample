import React from 'react';
import {Text} from 'react-native';
import {COLORS} from '../../../constants';
import {styles} from './styles';

export const StatusLabel: React.FC<any> = ({status}) => {
  return (
    <Text
      style={[
        styles.statusText,
        {
          color:
            status === 'Alive'
              ? COLORS.alive
              : status === 'Dead'
              ? COLORS.dead
              : COLORS.unknown,
        },
      ]}>
      [{status === 'unknown' ? 'missing' : status}]
    </Text>
  );
};
