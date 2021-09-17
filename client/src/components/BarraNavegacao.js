import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';

const BarraNavegacao = (props) => {

  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Section>
        <DrawerItem
          label="Acesse sua conta"
          labelStyle={styles.textSecao}
          onPress={() => { props.navigation.navigate('Login') }}
        />
      </Drawer.Section>
      <DrawerItem
        label="Página Inicial"
        onPress={() => { props.navigation.navigate('Only Motors') }}
      />
      <DrawerItem
        label="Painel de Anúncios"
        onPress={() => { props.navigation.navigate('Painel de Anúncios') }}
      />
      <DrawerItem
        label="Chat"
        onPress={() => { props.navigation.navigate('Chat') }}
      />
      <DrawerItem
        label="Inserir Anúncio"
        onPress={() => { props.navigation.navigate('Inserir Anúncio') }}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  textSecao: {
    fontSize: 20
  },
});

export default BarraNavegacao;

