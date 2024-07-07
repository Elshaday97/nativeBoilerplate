import {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

export type DeviceOrientation = 'Landscape' | 'Portrait';

const getOrientation = (height?: number, width?: number): DeviceOrientation =>
  (height || Dimensions.get('window').height) >
  (width || Dimensions.get('window').width)
    ? 'Portrait'
    : 'Landscape';

const useDeviceOrientation = (): DeviceOrientation => {
  const [orientation, setOrientation] = useState<DeviceOrientation>(
    getOrientation(),
  );

  const onChange = ({window: {width, height}}: {window: ScaledSize}) =>
    setOrientation(getOrientation(height, width));

  useEffect(() => {
    const dimensionHandler = Dimensions.addEventListener('change', onChange);

    return () => dimensionHandler.remove();
  }, []);

  return orientation;
};

export default useDeviceOrientation;
