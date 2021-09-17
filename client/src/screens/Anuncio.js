import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import api from '../services/api';
import { Button, DataTable } from 'react-native-paper';
import variaveis from '../services/variaveis';

const Anuncio = ({ route, navigation }) => {

  const { itemId } = route.params;
  const [anuncio, setAnuncio] = useState({
    cod_user: 1234,
    cpf_user: 0,
    ano_fabricacao: 0,
    ano_modelo: 0,
    descricao_veiculo: "",
    nome_fabricante: "",
    veiculo_marca: "",
    veiculo_valor: "",
    __v: 0,
    _id: ""
  });

  useEffect(() => {
    api(`anuncioById?id=${itemId}`)
      .then(res => {
        console.log(itemId)
        console.log(res.data[0])
        let r = res.data[0]
        console.log(typeof (r))
        setAnuncio(res.data[0])
      })
  }, [navigation, itemId])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.img}
          source={{
            uri: variaveis.serverUrl + "images/sem_foto.png"
          }}
        />
        <Text style={styles.textSecao}>Informações do anúncio</Text>
        <DataTable.Row>
          <View>
            <Text style={styles.textDetalhe}>Nome do fabricante</Text>
            <Text style={styles.text}>{anuncio.nome_fabricante}</Text>
          </View>
        </DataTable.Row>
        <DataTable.Row>
          <View>
            <Text style={styles.textDetalhe}>Marca</Text>
            <Text style={styles.text}>{anuncio.veiculo_marca}</Text>
          </View>
        </DataTable.Row>
        <DataTable.Row>
          <View>
            <Text style={styles.textDetalhe}>Modelo</Text>
            <Text style={styles.text}>{anuncio.descricao_veiculo}</Text>
          </View>
        </DataTable.Row>
        <DataTable.Row>
          <View>
            <Text style={styles.textDetalhe}>Ano de fabricação</Text>
            <Text style={styles.text}>{anuncio.ano_fabricacao}</Text>
          </View>
        </DataTable.Row>
        <DataTable.Row>
          <View>
            <Text style={styles.textDetalhe}>Ano do Modelo</Text>
            <Text style={styles.text}>{anuncio.ano_modelo}</Text>
          </View>
        </DataTable.Row>
        <DataTable.Row>
          <View>
            <Text style={styles.textDetalhe}>Valor do veículo</Text>
            <Text style={styles.text}>{anuncio.veiculo_valor}</Text>
          </View>
        </DataTable.Row>
        <Text style={styles.textSecao}>Contatar anunciante</Text>
        <Button mode="contained" color="#FF7D04" labelStyle={{ color: "white" }} style={styles.botao}>Mensagem</Button>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: 320
  },
  textSecao: {
    fontSize: 20,
    fontWeight: "500",
    padding: 16
  },
  textDetalhe: {
    color: "grey"
  },
  text: {
    marginLeft: 15,
    fontSize: 16,
  },
  botao: {
    marginLeft: 16,
    marginBottom: 16,
    alignSelf: "flex-start"
  }
});

export default Anuncio;