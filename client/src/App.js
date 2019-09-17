import React, { useState } from 'react';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={props => <Movie {...props}/>} />

      </div>
    </div>
  );
};

export default App;
