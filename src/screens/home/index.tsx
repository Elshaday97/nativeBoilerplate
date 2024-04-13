import React from 'react';
import {useHomeScreenSlice} from './slice';
import {HomeScreenProps} from './types';
import {Text} from 'react-native-paper';
import {Dimensions, StyleSheet, View} from 'react-native';

const HomeScreen = ({}: HomeScreenProps) => {
  const {} = useHomeScreenSlice();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'Urbanist-Regular',
  },
});

export default React.memo(HomeScreen);
