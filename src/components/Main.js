require('normalize.css/normalize.css');
require('semantic-ui-css/semantic.min.css');
require('styles/App.scss');

import React from 'react';
import ModelCard from './ModelCard.js';
//import { Card } from 'semantic-ui-react';

let sample1 = require('../images/sample-models/sample1.thumb.jpg');

const items = [
  {
    id: 1,
    name: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    uploaded: '10 minutes ago',
    image: sample1
  }
];

class AppComponent extends React.Component {
  render() {
    let cards = items.map(item => {
      return <ModelCard key={item.id} name={item.name} description={item.description} uploaded={item.uploaded} image={item.image} />;
    });

    return (
      <div className="index">
        {cards}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
