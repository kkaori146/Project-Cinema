import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, Button, FlatList, Image, View } from 'react-native';

const App = () => {

  const [movies, setMovies] = useState([]);

  const handleLoadButton = async () => {
    const req = await fetch ("https://api.b7web.com.br/cinema/");
    const json = await req.json();

    if(json) {
      setMovies(json);
    }
  }

  return (
    <SafeAreaView>
     <Button title="Loading the movies" onPress={handleLoadButton}/>
     <Text>Total of Movies: {movies.length}</Text>
     <FlatList
      data={movies}
      renderItem={({item})=> (
        <View>
          <Image source={{uri: item.avatar}} style={{width: 200, height: 200}} />
          <Text>{item.titulo}</Text>
        </View>
      )}
      keyExtractor={item => item.titulo}
     />
    </SafeAreaView>
  );
}
export default App;