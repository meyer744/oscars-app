import React from 'react';
import {ActressList} from '../data/actress';
import ActressSingle from './actress-single';
import Actress from './actress';
import { Route} from 'react-router-dom';

const ActressContainer = (props) => {
    let actressUrl = ActressList.map((actress,i) => {
        return (
          <Route key={i} path={`/actress/${actress.url}`} render={() => <ActressSingle name={actress.name} image={actress.profile_img} details={actress.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/actress" render={() => <Actress title="Best Actresses"/>} />
          {actressUrl}
        </React.Fragment>
    );
}

export default ActressContainer;