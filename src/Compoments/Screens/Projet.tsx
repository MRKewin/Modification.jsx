import {View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

const Projet = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/images/Background.png')}>
        <View style={styles.centerContainer}>
          <Text style={styles.textStyle}>Profile Screen</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Projet;

// import {View, ImageBackground} from 'react-native';
// import React from 'react';
// import { Text } from 'react-native-paper';

// const Projet = ({navigation}) => {
//   return (
//     <View>
//       <ImageBackground
//         style={[{width: '100%', height: '100%'}]}
//         source={require('../../../assets/images/Background.png')}>

//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//           <Text style={{fontSize: 16, fontWeight: '700'}}>Profile Screen</Text>
//         </View>

//       </ImageBackground>
//     </View>
//   );
// };

// export default Projet;
