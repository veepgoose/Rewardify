import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Wishlist" component={Wishlist} /> */}
      </Stack.Navigator>
    </NavigationContainer>


 

  );
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Is this working!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
