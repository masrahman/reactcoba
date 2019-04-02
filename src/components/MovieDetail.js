import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardSection, TextHor12 } from './common';

const MovieDetail = (props) => {
    const { data } = props;
    const { textHeader, posterStyle } = styles;
    const urlImage = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    console.log(urlImage);
    return (
        <Card>
            <CardSection>
                <Text style={textHeader}>{data.title}</Text>
            </CardSection>
            <CardSection>
                <Image style={posterStyle} source={{ uri: urlImage }} />
            </CardSection>
            <CardSection>
                <View style={{ flexDirection: 'column' }}>
                    <TextHor12 label={'Rating'} value={data.vote_average} />
                    <TextHor12 label={'Voters'} value={data.vote_count} />
                    <TextHor12 label={'Release'} value={data.release_date} />
                    <TextHor12 label={'Description'} value={data.overview} />
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    textHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    posterStyle: {
        flex: 1,
        height: 300,
        width: null,
        resizeMode: 'contain'
    }
};

export default MovieDetail;
