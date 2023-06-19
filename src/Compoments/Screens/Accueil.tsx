import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface AccueilProps {
  navigation: any;
}

export const Accueil: React.FC<AccueilProps> = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle & {flex: number; justifyContent: string; alignItems: string},
    imageBackground: {
      width: '100%',
      height: '100%',
      alignSelf: 'center',
    } as ViewStyle,
    buttonContainer: {
      top: 400,
    },
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/images/Opening.png')}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginEmail')}
          accessibilityLabel="Suivant">
          <Text>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// import React, {useEffect} from 'react';

// import {
//   ImageBackground,
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// // import Styles from '../../assets/style/Styles'; //Exemple pour le fichier style

// //Acceuil Screen

// export const Acceuil = ({navigation}) => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       navigation.navigate('Login');
//     }, 5000);
//     return () => clearTimeout(timeout);
//   }, [navigation]);

//   return (
//     <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
//       {/* <Button
//         title="Commencer"
//         onPress={() => navigation.navigate('Login')}
//       /> */}
//       <ImageBackground
//         style={[{width: '100%', height: '100%', alignSelf: 'center'}]}
//         source={require('../../../assets/images/Opening.png')}></ImageBackground>

//       {/* <View >
//  <Image
//  style={[{resizeMode: 'contain', width: 250, height: 100, alignSelf: 'center',}]}
//  source={require('../../../assets/images/Logo1.png')}/>
//  </View>  */}
//       <View style={[{top: 400}]}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('Login Email')}
//           accessibilityLabel="Suivant">
//           <Text>Suivant</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
