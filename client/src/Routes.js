
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Appbar } from 'react-native-paper';
import Home from './screens/Home';
import InserirAnuncio from './screens/InserirAnuncio';
import Anuncio from './screens/Anuncio';
import ProgressoUpload from './screens/ProgressoUpload';
import BarraNavegacao from './components/BarraNavegacao';
import { NavigationContainer } from '@react-navigation/native';

const Routes = () => {
  const Drawer = createDrawerNavigator();

  const drawerOptions = {
    headerStyle: {
      backgroundColor: '#FF7D04',
    },
    headerTintColor: '#fff',
    headerShown: true,
    headerRight: () => (
      <Appbar.Action color="white" icon="magnify" onPress={() => { }} />
    )
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <BarraNavegacao {...props} />}
      >
        <Drawer.Screen name="Login" component={Home} options={drawerOptions}/>
        <Drawer.Screen name="Only Motors" component={Home} options={drawerOptions}/>
        <Drawer.Screen name="Painel de Anúncios" component={Home} options={drawerOptions}/>
        <Drawer.Screen name="Chat" component={Home} options={drawerOptions}/>
        <Drawer.Screen name="Inserir Anúncio" component={InserirAnuncio} options={drawerOptions}/>
        <Drawer.Screen name="Anúncio" component={Anuncio} options={drawerOptions}/>
        <Drawer.Screen name="Progresso de Upload" component={ProgressoUpload} options={drawerOptions}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;