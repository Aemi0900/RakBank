import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import useInsurance from './useInsurance';
import {
  Text,
  Buttons,
  WaveAnimation,
  TransparentButton,
} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icons} from '../../helpers';
import {Colors, Metrics} from '../../themes';
import Animated from 'react-native-reanimated';
function Insurance() {
  const {animatedStyles, onNavigate} = useInsurance();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={styles.section1ChildView}>
            <View style={styles.registerButton}>
              <TransparentButton
                containerStyle={{borderColor: Colors.white, width: '30%'}}
                textColor={{color: Colors.white}}
                btnPress={() => {}}
                label={'Register'}
              />
            </View>
            <Animated.View style={[styles.headingView, animatedStyles]}>
              <Text size="xxxLarge" type="medium_poppins" color={Colors.white}>
                RAKBANK
              </Text>
              <Text size="small" type="medium_poppins" color={Colors.white}>
                Everything you love about {'\n'}Digital Banking in a smarter,
                {'\n'}simpler design
              </Text>
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
                onNavigate();
              }}
              label={'Login with User ID'}
              containerStyle={styles.button}
            />
            <View style={styles.section2Text}>
              <Icons.MaterialCommunityIcons
                name="fingerprint"
                color={Colors.themeColors.primary}
                size={Metrics.ratio(20)}
              />
              <Text
                size="small"
                type="medium_poppins"
                color={Colors.themeColors.primary}
                style={{paddingLeft: Metrics.ratio(10)}}>
                Quick Balance
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Insurance;
