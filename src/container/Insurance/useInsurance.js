import {useCallback} from 'react';

import {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';


export default () => {
  const offset = useSharedValue(0);
  const navigation = useNavigation();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });

  useFocusEffect(
    useCallback(() => {
      offset.value = withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    }, []),
  );
  const onNavigate = () => {
    navigation.navigate('Login');
    offset.value = withTiming(-255, {
      duration: 800,
      easing: Easing.in(Easing.exp),
    });
  };
  return {animatedStyles, offset, onNavigate};
};
