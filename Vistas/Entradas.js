import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Modal, Image ,TouchableHighlight, TextInput} from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
import Productos from '../assets/List/Productos';

const Entradas = () => {

const ProdEntradas = Productos.filter((result) => result.Categoria.includes('Entrada'))

const [VerModal, setVerModal] = useState(false);
const [Entrada, setEntrada] = useState('');
const [DescEntrada, setDescEntrada] = useState('');
const [PrecioEntrada, setPrecioEntrada] = useState('');
const [imagenEntrada, setImagenEntrada] = useState('');
const [Cantidad, setCantidad] = useState(0);

function SeleccionEntrada(resultado){
const EntradaSelect = ProdEntradas.find((promo) => promo.Nombre === resultado)

setEntrada(resultado)
setDescEntrada(EntradaSelect.Descripcion)
setPrecioEntrada(EntradaSelect.Precio)
setImagenEntrada(EntradaSelect.Imagen)
setVerModal(true)
}

function CerrarModal(){
setVerModal(false)
setCantidad(0)
}

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <ScrollView style={{ width: '90%', marginTop: 20}}>
          
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {
              ProdEntradas.map((resultado) =>
              <View style={{flexBasis: '49%',}}>
                  <TouchableOpacity onPress={() => SeleccionEntrada(resultado.Nombre)}>
                    <Image 
                      source={{uri: resultado.Imagen}}
                      style={styles.ImagenProducto}>
                    </Image>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>{resultado.Nombre}</Text>
                    <Text style={styles.TextoProducto}>{resultado.Descripcion}</Text>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
        </ScrollView>



        
  <Modal
    visible= {VerModal}>
    <View style={styles.ViewModalSup}>
      <View style={styles.ViewModalInf}>

        <View style={styles.Encabezado}>
          <TouchableHighlight onPress={() => CerrarModal()}>
            <Image
              source={require('../assets/img/flecha.png')}
              style={styles.flechaAtras}
            />
          </TouchableHighlight>
        </View>

        <View>
          <Image
            source={{uri: imagenEntrada}}
            style={{width: 350, 
                    height: 250, 
                    alignSelf: 'center',
                    borderRadius: 15}}
          />

        <Text style={{fontSize: 50, fontWeight: 'bold', margin: 5}}>{Entrada}</Text>

        <Text style={{fontSize: 20, 
                      width: '80%', 
                      marginLeft: 25}}>{DescEntrada}</Text>

        <View style={{flexDirection: 'row', 
                      justifyContent: 'space-between',
                      marginLeft: 25,}}>

          <Text style={{fontSize: 40, 
                        fontWeight: 'bold', }}>${PrecioEntrada}</Text>
          
          <View style={{flexDirection: 'row'}}>

            <Text style={{fontSize: 25, 
                          fontWeight: 'bold',
                          textAlignVertical: 'center',
                          marginTop: 5,
                          marginRight: 10}}>Cantidad</Text>

            <TextInput 
              style={{backgroundColor: '#b4eeb4', 
                      fontSize: 25, 
                      width: '35%', 
                      height: '75%', 
                      borderRadius: 15, 
                      marginTop: 10,
                      textAlign: 'center'}}
              keyboardType='numeric'
              onChangeText={(cant) => setCantidad(cant)}
            />
          </View>

        </View>

        <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 25, color: '#17A05D', marginTop: 20}}>Total: ${parseFloat(PrecioEntrada * Cantidad)}</Text>

        <Button title="Agregar al pedido"/>
        </View>
      </View>
    </View>
  </Modal>
      </View>
    );
  }


  const styles = StyleSheet.create({
    ImgCentrado:{
      alignContent: 'center',
      justifyContent: 'center'
    },
    ImagenProducto:{
      width: 180, 
      height: 150,
    },
    TextoProducto:{
      width: 175, 
      marginBottom: 70,
    },


    ViewModalSup:
    {   width: '100%',
        height: '100%',
        flex:1,
        backgroundColor: 'rgba(1,1,1,0.8)',
        justifyContent: 'center',
        alignItems:'center',
    },
    ViewModalInf:
    {
        height:'90%',
        width:'90%',
        backgroundColor: '#fff',
    },
    Encabezado:
    {
      height: 80,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    flechaAtras:
    {
      width: 50,
      height: 50,
      margin: 10,
    },

})

export default Entradas;

