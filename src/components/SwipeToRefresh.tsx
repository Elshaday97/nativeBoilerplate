import React from 'react';
import {ReactNode} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

interface SwipeToRefreshProps {
  children: ReactNode;
  onRefresh: () => void;
  isRefreshing: boolean;
}

const SwipeToRefresh = ({
  children,
  isRefreshing,
  onRefresh,
}: SwipeToRefreshProps) => {
  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      {children}
    </ScrollView>
  );
};

export default SwipeToRefresh;
