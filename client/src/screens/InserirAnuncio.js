import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { List, Button } from 'react-native-paper';
import ImageViewer from 'react-native-image-zoom-viewer';
import { ScrollView } from 'react-native-gesture-handler';
import variaveis from '../services/variaveis';

const InserirAnuncio = ({ navigation }) => {

  const enviarUpload = async () => {

    const file = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false
    })

    navigation.navigate('Progresso de Upload', {
      file: file
    });
  }

  const imagens = [
    {
      url: variaveis.serverUrl + "images/template.png"
    }
  ]

  return (
    <ScrollView >
      <List.Item
        title="Passo 1"
        description={<Text>Crie um arquivo.csv no seguinte formato. <Text style={{ color: "#FF7D04", fontWeight: "700" }} onPress={() => Linking.openURL('http://192.168.18.5:3333/download/template.csv')}>Clique aqui</Text> para baixar o template.</Text>}
      />
      <List.Item
        title="Exemplo CSV"
        description={
          <Text>Nome_do_fabricante | descrição_marca_do_veículo | descrição_do_modelo_do_veículo | cod_do_anunciante | ano_de_fabricação | ano_do_modelo | cpf_do_anunciante | cnpj_do_anunciante | valor_do_veículo</Text>
        }
        descriptionNumberOfLines={6}
      />
      <ImageViewer
        renderIndicator={() => <Text></Text>}
        style={styles.exemplo}
        imageUrls={imagens}
      />
      <List.Item
        title="Passo 2"
        description="Agora clique no botão enviar para escolher o arquivo e enviá-lo automaticamente."
        descriptionNumberOfLines={2}
      />
      <Button mode="contained" color="#FF7D04" labelStyle={{ color: "white" }} onPress={enviarUpload} style={styles.botao}>Enviar</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  exemplo: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    alignItems: "flex-start"
  },
  botao: {
    alignSelf: "center"
  }
});

export default InserirAnuncio;