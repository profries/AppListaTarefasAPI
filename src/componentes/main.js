import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, FlatList, Text, View} from 'react-native';
import api from '../servicos/api';

const Item = ({title, selecionado, onPress, onLongPress}) => {
  console.log(selecionado);
  return (
  <TouchableWithoutFeedback onPress={onPress}
    onLongPress={onLongPress}>
    <View style={styles.itemContainer}>
      <Text style={ selecionado 
          ?styles.itemTextSelecionado
          :styles.itemText
        }>
        {title}
      </Text>
    </View>
    </TouchableWithoutFeedback> 
  
)};

export default class MainScreen extends Component {
  static navigationOptions = {
    title:'Lista de Tarefas'
  };

  state = {
    tarefas: []
  };

  componentWillMount(){
    this.carregaTarefas();
  }

  carregaTarefas = async () => {
    const response = await api.get('/tarefas');
    const tarefas = response.data;
    this.setState({tarefas: tarefas});

  }
  
  selecionar=(id)=>{
    let tarefas = this.state.tarefas;
    let tarefa = tarefas.find((tarefa) => tarefa.id == id);
    tarefa.selecionado = !tarefa.selecionado;
    this.setState({tarefas: tarefas});
    // console.log(this.state);
  }

  mostrarTarefa = (id) => {
    this.props.navigation.navigate('Tarefa', {'id':id});
  }

  render() {
    return (
      <View style={styles.container}> 
        <FlatList style={styles.list}
          data = {this.state.tarefas}
          extraData = {this.state}
          keyExtractor = {item => item.id.toString()}
          renderItem={
            ({item}) => <Item title={item.tarefa} selecionado={item.selecionado}
              onPress={()=>this.selecionar(item.id)}
              onLongPress={()=>this.mostrarTarefa(item.id)}/>
          }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:30,
     backgroundColor: '#FAFAFA',
   },
   list: {
     padding: 20,
   },
   itemContainer:{
    backgroundColor:'#FFF',
    borderWidth: 1,
    borderColor:'#DDD',
    borderRadius: 5,
    padding: 20
   },
   itemText:{
     fontSize:20,
     fontWeight:'bold',
     color:'#333'
   },
   itemTextSelecionado: {
    fontSize:20,
    textDecorationLine: 'line-through',
    color:'#888'
   },

});
