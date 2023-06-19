import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './src/Compoments/Screens/Login';
import {LoginEmail} from './src/Compoments/Screens/LoginEmail';
import {LoginPhone} from './src/Compoments/Screens/LoginPhone';
import {Accueil} from './src/Compoments/Screens/Accueil';
import {StatusBar} from 'react-native';
import {Consentement} from './src/Compoments/Screens/Consentement';
import Status from './src/Compoments/Screens/Status';
import Register from './src/Compoments/Screens/Register';
import Projet from './src/Compoments/Screens/Projet';
import Rcaptcha from './src/Compoments/Screens/Rcaptcha';
import Localisation from './src/Compoments/Screens/Localisation';
import SmsCode from './src/Compoments/Screens/SmsCode';
import Picture from './src/Compoments/Screens/Picture';
import Camera from './src/Compoments/Screens/Camera';
import Genre from './src/Compoments/Screens/Genre';
import Bienvenue from './src/Compoments/Screens/Bienvenue';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
import Settings from './src/Compoments/Screens/Settings';
// import CercleInvest from './src/Compoments/Screens/CercleInvest';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen
          name="Accueil"
          component={Accueil}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Consentement"
          component={Consentement}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="LoginEmail"
          component={LoginEmail}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="LoginPhone"
          component={LoginPhone}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Status"
          component={Status}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Projet"
          component={Projet}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Genre"
          component={Genre}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Localisation"
          component={Localisation}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Rcaptcha"
          component={Rcaptcha}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Picture"
          component={Picture}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="SmsCode"
          component={SmsCode}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />
        <Stack.Screen
          name="Bienvenue"
          component={Bienvenue}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},

            //     activeTintColor: '#e91e63',
            //  itemStyle: { marginVertical: 10 },
          }}
        />

        {/* <Drawer.Navigator
          drawerType="front"
          initialRouteName="Profile"
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: {marginVertical: 10},
          }}>
          {DrawerItems.map(drawer => (
            <Drawer.Screen key={drawer.name} />
          ))}
        </Drawer.Navigator> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Login} from './src/Compoments/Screens/Login';
// import {LoginEmail} from './src/Compoments/Screens/LoginEmail';
// import {LoginPhone} from './src/Compoments/Screens/LoginPhone';
// import {Acceuil} from './src/Compoments/Screens/Accueil';
// import {StatusBar} from 'react-native';
// import {Consentement} from './src/Compoments/Screens/Consentement';
// import Status from './src/Compoments/Screens/Status';
// import Register from './src/Compoments/Screens/Register';
// import Projet from './src/Compoments/Screens/Projet';
// import Rcaptcha from './src/Compoments/Screens/Rcaptcha';
// import Localisation from './src/Compoments/Screens/Localisation';
// import SmsCode from './src/Compoments/Screens/SmsCode';
// import Picture from './src/Compoments/Screens/Picture';
// import Camera from './src/Compoments/Screens/Camera';
// import Genre from './src/Compoments/Screens/Genre';
// import Bienvenue from './src/Compoments/Screens/Bienvenue';
// // import {createDrawerNavigator} from '@react-navigation/drawer';
// // import {NavigationContainer} from '@react-navigation/native';
// import Settings from './src/Compoments/Screens/Settings';
// // import CercleInvest from './src/Compoments/Screens/CercleInvest';

// const Stack = createNativeStackNavigator();
// // const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar translucent backgroundColor="transparent" />
//       <Stack.Navigator initialRouteName="Accueil">
//         <Stack.Screen
//           name="Accueil"
//           component={Acceuil}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Consentement"
//           component={Consentement}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="LoginEmail"
//           component={LoginEmail}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="LoginPhone"
//           component={LoginPhone}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Status"
//           component={Status}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Register"
//           component={Register}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Projet"
//           component={Projet}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Genre"
//           component={Genre}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Localisation"
//           component={Localisation}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Rcaptcha"
//           component={Rcaptcha}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Picture"
//           component={Picture}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="SmsCode"
//           component={SmsCode}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />
//         <Stack.Screen
//           name="Bienvenue"
//           component={Bienvenue}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />
//         <Stack.Screen
//           name="Camera"
//           component={Camera}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},
//           }}
//         />

//         <Stack.Screen
//           name="Settings"
//           component={Settings}
//           options={{
//             title: '',
//             headerTransparent: true,
//             headerStyle: {backgroundColor: 'transparent'},

//             //     activeTintColor: '#e91e63',
//             //  itemStyle: { marginVertical: 10 },
//           }}
//         />

//         {/* <Drawer.Navigator
//           drawerType="front"
//           initialRouteName="Profile"
//           drawerContentOptions={{
//             activeTintColor: '#e91e63',
//             itemStyle: {marginVertical: 10},
//           }}>
//           {DrawerItems.map(drawer => (
//             <Drawer.Screen key={drawer.name} />
//           ))}
//         </Drawer.Navigator> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
