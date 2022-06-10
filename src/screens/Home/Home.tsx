import React from 'react'
import {LayoutManageSafeBox} from '../../components/LayoutManage'
import {CardFull} from '../../components/Card'
import {  FlatList } from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Cheeatara',
    type: 'gata',
    descripition: 'Uma gatinha muito carinhosa',
    age: '1 ano e 5 meses'
  },
  {
    id: 2,
    name: 'Cris',
    type: 'dog',
    descripition: 'cahorinho fofo',
    age: '1 ano e 3 meses'

  },
  {
    id: 3,
    name: 'Smoke',
    type: 'gato',
    descripition: 'Gato preguiçoso',
    age: '2 ano e 1 meses'

  },
];

const renderItem = ({item}:any) => <CardFull description={item} />

export default function HomeScreen() {

  return (
    <LayoutManageSafeBox goback={false} title={'Home'} right={true}>
       <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
       />
    </LayoutManageSafeBox>
  )
}
