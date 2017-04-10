require('normalize.css/normalize.css');
require('semantic-ui/dist/semantic.min.css');
require('styles/App.scss');

import React from 'react';
import { Button } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%'
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%'
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%'
  }
];

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <Button>
          Click Here
        </Button>
        <Card.Group items={items} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
