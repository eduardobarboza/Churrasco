import React from "react";
import { StyleSheet, Text, View, Image, flatList, ListRenderItemInfo } from 'react-native';
import { churrasItem } from "./components/churrasItem";
import { SeparatorItem } from "./components/SeparatorItem/SeparatorItem";
import { Churras, churrasList } from "./Data/churrasList";
import { FlatList } from "react-native-web";

export default function App() {
  function renderItem({ Item }: ListRenderItemInfo<Churras>) {
    return <churrasItem {...Item} />;

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source = {require('./assets/churrasco.png')} style={styles.img}/>
          <Text style={styles.txtHeader}>CHURRASCO EM CASA</Text>
          <Text style={styles.txt}>Calculando a Comida e a bebida</Text>
    </View>

    <View>
          <Text style={styles.titulo}>Vai fazer um churrasco mas não sabe o que comprar?</Text>
          <Text style={styles.desc}>Final de semana chegando e vem aquela vontade de fazer um churrasco. Nessa hora bate uma dúvida da quantidade de carne e de bebidas que cada convidado vai consumir. Veja abaixo uma média do consumo por pessoa.</Text>
    </View>
    
    <View>
      <FlatList
        ItemSeparatorComponent={SeparatorItem}
        data={churrasList}
        keyExtractor={(Item) => Item.name}
        renderItem={renderItem}
        
      />
        
      
    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },

  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 50,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1
    
  },

  header: {
    width: '100%',
    height: 150,
    backgroundColor: '#00A79D',
    borderBottomLeftRadius: 43,
    borderBottomRightRadius: 43,
    },

    txtHeader: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
      flexDirection: 'row',
      marginTop:-55,
      marginLeft: 120
    },

    txt: {
      color: '#fff',
      fontSize: 16,
      flexDirection: 'row',
      marginTop:0,
      marginLeft: 120
    },
    titulo: {
      fontWeight:'bold',
      fontSize: 22,
      textAlign: 'center',
      marginTop: 20
    },
    desc: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 20
    }


});
