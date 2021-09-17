import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../services/api';
import { ProgressBar } from 'react-native-paper';

const ProgressoUpload = ({ route, navigation }) => {

  const [isLoading, setIsLoading] = useState(true);
  const { file } = route.params;

  useEffect(() => {
    console.log(file.uri)
    const data = new FormData();
    data.append("file", {
      uri: file.uri,
      type: "text/csv",
      name: file.name
    });

    api.post('add_anuncio', data)
      .then(res => {
        console.log(res)
      })

    setIsLoading(false)
  }, [file])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ProgressBar indeterminate color="#FF7D04" style={styles.progress} />
        <Text style={styles.texto}>Cadastrando anúncio(s)...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ProgressBar progress={1} color="#FF7D04" style={styles.progress} />
      <Text style={styles.texto}>Anúncio(s) cadastrado(s) com sucesso!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    padding: 20
  },
  progress: {
    height: 5,
    width: 300
  }
});

export default ProgressoUpload;