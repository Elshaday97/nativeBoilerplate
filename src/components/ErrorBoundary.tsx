// ErrorBoundary.tsx
import React, {Component, ReactNode} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {hasError: true};
  }

  retry = () => {
    this.setState({hasError: false});
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Oops! Something went wrong.</Text>
          <Button mode="contained" onPress={this.retry} style={{marginTop: 20}}>
            Retry
          </Button>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
