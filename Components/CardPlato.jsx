import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, Boolean } from 'react-native';
import { ActionTypes, useContextState } from '../ContextState'
import BotonAgregar from "../Components/BotonAgregar";
import BotonEliminar from "../Components/BotonEliminar";

const Item = ({ title, image, pricePerServing, healthScore, vegan }) => (
  <View>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={image}></Image>
      <Text style={styles.title}>{pricePerServing}</Text>
      <Text style={styles.title}>{healthScore}</Text>    
 
      {vegan ? <Text>El plato es vegano</Text>:<Text>El plato no es vegano</Text>}
    </View>
  </View>
);



const CardPlato = (props) => {

  const { navigation, Detalle } = props
  const { contextState, setContextState } = useContextState();

  let existePlato = contextState.menu.lista.find(plato => plato.id === Detalle.id)

  return (
    <View>
      <Item title={Detalle.title} image={Detalle.image} pricePerServing={Detalle.pricePerServing} healthScore={Detalle.healthScore} vegan={Detalle.vegan} />
      {
        existePlato
          ?
          <>
            <BotonEliminar style={{ fontSize: 48 }}
              text="ELIMINAR"
              onPress={async () => {
                setContextState({
                  type: ActionTypes.SetDescontarPricePerServing,
                  value: Detalle.pricePerServing,
                });

                setContextState({
                  type: ActionTypes.SetDescontarHealthScore,
                  value: Detalle.healthScore,
                });
                setContextState({
                  type: ActionTypes.SetEliminarId,
                  value: Detalle.id,
                });
                navigation.navigate('Home')
              }}
            />
          </>
          :
          <>
            <BotonAgregar style={{ fontSize: 48 }}
              text="AGREGAR"
              onPress={async () => {
                console.log(Detalle)
                setContextState({
                  type: ActionTypes.SetMenuPrecio,
                  value: Detalle.pricePerServing,
                });

                setContextState({
                  type: ActionTypes.SetMenuHealthScore,
                  value: Detalle.healthScore,
                });
                setContextState({
                  type: ActionTypes.SetMenuLista,
                  value: Detalle,
                });
                navigation.navigate('Home')
              }}
            />
          </>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 15,
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default CardPlato;