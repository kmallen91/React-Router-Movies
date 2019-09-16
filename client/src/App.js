import React, { useState } from 'react';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={Movie} />

      </div>
    </div>
  );
};

export default App;
