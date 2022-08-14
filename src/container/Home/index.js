import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from '../../components';
import useHome from './useHome';
import {Colors, Metrics} from '../../themes';

function Home() {
  const {userData} = useHome();
  return (
    <View style={styles.container}>
      <View
        style={{
          borderColor: Colors.themeColors.border,
          borderWidth: Metrics.ratio(1),
          borderRadius: Metrics.ratio(10),
          padding: Metrics.ratio(10),
        }}>
        <Text type="medium_poppins" size="small">
          UserId:{' '}
          <Text type="base" size="xxSmall">
            {userData.data.email}
          </Text>
        </Text>
        <Text type="medium_poppins" size="small">
          DeviceName:{' '}
          <Text type="base" size="xxSmall">
            {userData.data.deviceName}
          </Text>
        </Text>
        <Text type="medium_poppins" size="small">
          Ip Address:{' '}
          <Text type="base" size="xxSmall">
            {userData.data.ipAddress}
          </Text>
        </Text>
        <Text type="medium_poppins" size="small">
          Latitude:{' '}
          <Text type="base" size="xxSmall">
            {userData.data.latitude}
          </Text>
        </Text>
        <Text type="medium_poppins" size="small">
          Longitude:{' '}
          <Text type="base" size="xxSmall">
            {userData.data.longitude}
          </Text>
        </Text>
        <Text type="medium_poppins" size="small">
          Manufacturer Name:{' '}
          <Text type="base" size="xxSmall">
            {userData.data.manufacturerName}
          </Text>
        </Text>
        <Text type="medium_poppins" size="small">
          OS Name:{' '}
          <Text type="base" size="xxSmall">
            {userData.data.osName}
          </Text>
        </Text>
        <Text type="medium_poppins" size="small">
          {`${userData.lastLogin ? 'Last' : 'First'}`} Login Time:{' '}
          <Text type="base" size="xxSmall">
            {userData.lastLogin ? userData.lastLogin : userData.data.lastLogin}
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Home;
