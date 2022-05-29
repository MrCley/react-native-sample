import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type Props = {
  category: string;
  value: string | undefined;
};

export const DescriptionView: React.FC<Props> = ({category, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category}:</Text>
      <Text> {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    width: '70%',
    marginBottom: '3%',
  },
  text: {
    fontStyle: 'italic',
  },
});
