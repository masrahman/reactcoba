import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import MovieDetail from './MovieDetail';

class MovieList extends React.Component {
    state = { movies: [], isLoading: true };
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=f49aeced32a3833bf8a200bfa7c2c7f2&language=en-US&page=1')
            .then((response) => response.json())
            .then(json => {
                this.setState({
                    movies: json.results,
                    isLoading: false
                });
            });
    }
    
    renderMovie() {
        return this.state.movies.map(movie => 
            <MovieDetail key={movie.id} data={movie} />
        );
    }
    render() {
        return (
            <ScrollView>
                {this.renderMovie()}
                {this.state.isLoading && (
                <ActivityIndicator
                    style={{ height: 80, alignItems: 'center' }}
                    color="#0000ff"
                    size="large"
                />
                )}
            </ScrollView>    
        );
    }
}

export default MovieList;
