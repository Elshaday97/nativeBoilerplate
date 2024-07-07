import React, {useState} from 'react';
import {useHomeScreenSlice} from './slice';
import {HomeScreenNavigationProps, HomeScreenProps} from './types';
import {Button, Text} from 'react-native-paper';
import {Dimensions, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RightIcon from '@assets/icons/arrow-right.svg';
import SwipeToRefresh from '@src/components/SwipeToRefresh';

const HomeScreen = ({}: HomeScreenProps) => {
  useHomeScreenSlice();

  const navigation = useNavigation<HomeScreenNavigationProps>();

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // TODO: Temporary usage, replace logic
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <SwipeToRefresh isRefreshing={isRefreshing} onRefresh={onRefresh}>
      <View style={styles.container}>
        <Text style={styles.label}>Home Page</Text>
        <Button
          icon={RightIcon}
          mode="contained"
          onPress={() => navigation.navigate('OtherScreen')}>
          Go to Other Screen
        </Button>
      </View>
    </SwipeToRefresh>
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
