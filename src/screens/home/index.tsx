import React from 'react';
import {useHomeScreenSlice} from './slice';
import {HomeScreenNavigationProps, HomeScreenProps} from './types';
import {Button, Text} from 'react-native-paper';
import {Dimensions, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {RouteNamesEnum} from '@src/navigation/types';

const HomeScreen = ({}: HomeScreenProps) => {
  const {} = useHomeScreenSlice();
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Home Page</Text>
      <Button
        // icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('Components')}>
        Show block components
      </Button>
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
    marginBottom: 25,
  },
});

export default React.memo(HomeScreen);
