import React from 'react';
import {View, TouchableOpacity, } from 'react-native';
import styles from './styles';
import useLogin from './useLogin';
import {
  Text,
  Buttons,
  WaveAnimation,
  TransparentButton,
  TextInput as TextField,
  ActivityLoader,
} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icons} from '../../helpers';
import {Colors, Metrics} from '../../themes';
import {useNavigation} from '@react-navigation/native';

import Animated from 'react-native-reanimated';

function Login() {
  const {values, setInputFields, onSubmit, loginData, animatedStyles} =
    useLogin();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={styles.section1ChildView}>
            <View
              style={{
                zIndex: 1000,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                marginHorizontal: Metrics.ratio(10),
                marginTop: Metrics.ratio(10),
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginLeft: Metrics.ratio(15)}}>
                <Icons.FontAwesome
                  name="chevron-left"
                  color={Colors.white}
                  size={Metrics.ratio(16)}
                />
              </TouchableOpacity>

              <TransparentButton
                containerStyle={{borderColor: Colors.white, width: '30%'}}
                textColor={{color: Colors.white}}
                btnPress={() => {}}
                label={'Register'}
              />
            </View>
            <Animated.View
              style={[
                {zIndex: 1000, marginTop: Metrics.ratio(20)},
                animatedStyles,
              ]}>
              <TextField
                onChangeText={e => {
                  setInputFields('email', e);
                }}
                value={values.email}
                containerStyle={{
                  marginBottom: Metrics.ratio(10),
                  margin: Metrics.baseMargin,
                }}
                textInputStyle={{}}
                label={'User ID'}
                secureTextEntry={false}
                keyboardType={'email-address'}
              />
              <TextField
                label={'Password'}
                secureTextEntry={true}
                onChangeText={e => {
                  setInputFields('password', e);
                }}
                value={values.password}
                containerStyle={{
                  marginBottom: Metrics.ratio(10),
                  margin: Metrics.baseMargin,
                }}
                textInputStyle={{}}
              />
            </Animated.View>
            <View style={{zIndex: 0, flex: 1}}>
              <WaveAnimation />
            </View>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.section2View}>
            <Buttons
              btnPress={() => {
                onSubmit();
              }}
              label={'Submit'}
              containerStyle={styles.button}
            />
            <View style={styles.section2Text}>
              <Text
                size="small"
                type="medium_poppins"
                color={Colors.themeColors.primary}
                style={{paddingLeft: Metrics.ratio(10)}}>
                Forget User ID | Forgot Password
              </Text>
              <Text
                size="small"
                type="medium_poppins"
                color={Colors.themeColors.primary}
                style={{paddingLeft: Metrics.ratio(10)}}>
                Enable User ID
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ActivityLoader isLoading={loginData.isFetching} />
    </SafeAreaView>
  );
}

export default Login;
