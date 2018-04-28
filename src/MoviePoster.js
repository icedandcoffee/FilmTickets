import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { defaultStyles } from './styles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;

export default class MoviePoster extends Component {
  // Definiere die Elemente, welche der Klasse geliefert
  //werden muessen, wenn sie gerufen wird.
  // Component prop types

  static propTypes = {
    // Movie object with title, genre, and poster
    movie: PropTypes.object.isRequired,
    // Called when user taps on a poster
    onOpen: PropTypes.func.isRequired,
  }

  render() {
    const { movie, movie: { title, genre, poster }, onOpen } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: poster }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.genre} numberOfLines={1}>{genre}</Text>
      </TouchableOpacity>
    );
  }
}

// "..." Syntax
// Wenn ein parameter aus einer irgendwo anders definierten Klasse
// gerufen wird, dann wird der "..." Syntax gerufen
//ORIINAL DEFINITION
//We can copy an object simply with {...originalObj}.
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  genre: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});
