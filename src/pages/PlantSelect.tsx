import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, 
  View, FlatList, ActivityIndicator} from 'react-native';

import api from '../services/api';

import EnviromentButton from '../components/EnviromentButton';
import Header from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import PlantCardPrimary from '../components/PlantCardPrimary';
import Load from '../components/Load';

interface Enviroment {
  key: string;
  title: string;
}

interface Plant {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string; 
  }
}

export default function PlantSelect() {
  const [enviroments, setEnviroments] = useState<Enviroment[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState('all');
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadAll, setLoadAll] = useState(false);

  async function getPlants(){
    const {data} = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if(!data){
      return setLoad(true);
    }
    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    }else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoad(false);
    setLoadingMore(false);
  }

  function handleFatMore(distante: number){
    if(distante < 1){
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1); 
    getPlants();
  }

  function handleEnviromentSelected(enviroment: string){
     setEnviromentSelected(enviroment);
     
     if(enviroment === 'all')
        return setFilteredPlants(plants);

     const filtered = plants.filter(plant => 
      plant.environments.includes(enviroment));

      setFilteredPlants(filtered);
    
  }
  
  useEffect(() => {
    async function getEnviroment(){
      const {data} = await api
      .get('plants_environments?_sort=title&_order=asc');

      setEnviroments([
        {
          key: 'all',
          title: 'Totos'
        },
        ...data
      ])
    }
    getEnviroment();

  },[]);

  useEffect(() => {    
    getPlants();
  },[]);

  if(load)
    return <Load />
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header title="Alexsandro" />
          <Text style={styles.title}>Em qual ambiente </Text>
          <Text style={styles.subtitle}>você quer colocar sua planta? </Text>
        </View>
        <View>
          <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
           data={enviroments}
           renderItem={({item}) => (
             <EnviromentButton 
              key={item.key} 
              title={item.title}
              active={item.key === enviromentSelected}
              onPress={() => handleEnviromentSelected(item.key)}
              />
           )} 
           />
        </View>
        <View style={styles.plants}>
          <FlatList 
          numColumns={2}
          showsVerticalScrollIndicator={false}
           data={filteredPlants}
           renderItem={({item}) => (
             <PlantCardPrimary key={item.id} data={item}/>
           )} 
           onEndReachedThreshold={0.1}
           onEndReached={({ distanceFromEnd }) => 
            handleFatMore(distanceFromEnd)}
            ListFooterComponent={
              loadingMore 
              ? <ActivityIndicator color={colors.green} />
              : <></>
            }
           />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop:15,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 20,
    marginVertical: 32,
  },

  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  }

});