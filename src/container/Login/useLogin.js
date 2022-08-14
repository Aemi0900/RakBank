import {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import {kApiLogin} from '../../config/WebService';
import {request as loginRequest} from '../../actions/LoginActions';
import {Keyboard} from 'react-native';
export default () => {
  const [values, setValues] = useState({email: '', password: ''});
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);
  const appSettings = useSelector(state => state.appSettings);
  const offset = useSharedValue(220);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });

  const setInputFields = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  useFocusEffect(
    useCallback(() => {
      offset.value = withTiming(0, {
        duration: 800,
        easing: Easing.in(Easing.exp),
      });
    }, []),
  );

  const onSubmit = () => {
    const {email, password} = values;
    dispatch(
      loginRequest(kApiLogin, {
        email,
        password,
        ...appSettings.deviceDetails,
      }),
    );
    Keyboard.dismiss();
    setValues({
      email: '',
      password: '',
    });
  };
  return {values, setInputFields, onSubmit, loginData, animatedStyles};
};
