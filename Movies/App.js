import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const App = () => {

  const [movies, setMovies] = useState([]);

  const handleLoadButton = async () => {
    const req = await fetch("https://api.b7web.com.br/cinema/");
    const json = await req.json();

    if(json) {
      setMovies(json);
    }
  }

  return (
    <SafeAreaView>
     <Button title="Loading the movies" onPress={handleLoadButton}/>
     <Text>Movies: {movies.length}</Text>
    </SafeAreaView>
  );
}
export default App;