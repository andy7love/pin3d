require('normalize.css/normalize.css');
require('semantic-ui-css/semantic.min.css');
require('styles/App.scss');

import React from 'react';
import ModelCard from './ModelCard.js';
import Masonry from 'react-masonry-component';
//import { Card } from 'semantic-ui-react';

const masonryOptions = {
    itemSelector: '.card',
    gutter: 20,
    initLayout: true,
    transitionDuration: 0
};

const items = [
  {
    id: 1,
    name: 'Urban Helicopter',
    description: 'Lorem ipsum dolor sit amet.',
    uploaded: '20m',
    tags: ['transport', 'flying'],
    likes: 17,
    comments: ['cool!', 'nice!', 'great!'],
    image: require('../images/sample-models/sample1.thumb.jpg'),
    author: {
      name: 'Elliot',
      avatar: require('../images/avatars/elliot.jpg')
    }
  },
  {
    id: 2,
    name: 'City Bridge',
    description: 'Lorem ipsum dolor sit amet.',
    uploaded: '32m',
    tags: ['building', 'urban'],
    likes: 4,
    comments: ['cool!'],
    image: require('../images/sample-models/sample2.thumb.jpg'),
    author: {
      name: 'Jenny',
      avatar: require('../images/avatars/jenny.jpg')
    }
  },
  {
    id: 3,
    name: 'Classic car',
    description: 'Lorem ipsum dolor sit amet.',
    uploaded: '45m',
    tags: ['transport', 'car', 'classic'],
    likes: 31,
    comments: ['cool!', 'nice!', 'great!', 'love it!', 'impresive!', 'wonderfull!'],
    image: require('../images/sample-models/sample3.thumb.jpg'),
    author: {
      name: 'Matthew',
      avatar: require('../images/avatars/matthew.png')
    }
  },
  {
    id: 4,
    name: 'Urban buildings',
    description: 'Lorem ipsum dolor sit amet.',
    uploaded: '7h',
    tags: ['transport', 'flying'],
    likes: 10,
    comments: ['cool!'],
    image: require('../images/sample-models/sample4.thumb.jpg'),
    author: {
      name: 'Elyse',
      avatar: require('../images/avatars/elyse.png')
    }
  },
  {
    id: 5,
    name: 'Car engine',
    description: 'Lorem ipsum dolor sit amet.',
    uploaded: '10h',
    tags: ['industrial', 'engine'],
    likes: 7,
    comments: ['nice!', 'great!'],
    image: require('../images/sample-models/sample5.thumb.jpg'),
    author: {
      name: 'Elliot',
      avatar: require('../images/avatars/elliot.jpg')
    }
  },
  {
    id: 6,
    name: 'City Hospital',
    description: 'Lorem ipsum dolor sit amet.',
    uploaded: '14h',
    tags: ['building', 'urban'],
    likes: 21,
    comments: ['cool!', 'nice!', 'great!', 'love it!', 'impresive!'],
    image: require('../images/sample-models/sample6.thumb.jpg'),
    author: {
      name: 'Jenny',
      avatar: require('../images/avatars/jenny.jpg')
    }
  },
  {
    id: 7,
    name: 'Cessna 172',
    description: 'Lorem ipsum dolor sit amet.',
    uploaded: '5d',
    tags: ['transport', 'flying'],
    likes: 21,
    comments: ['great!', 'love it!', 'impresive!'],
    image: require('../images/sample-models/sample7.thumb.jpg'),
    author: {
      name: 'Elyse',
      avatar: require('../images/avatars/elyse.png')
    }
  }
];

class AppComponent extends React.Component {
  render() {
    let cards = items.map(item => {
      return <ModelCard key={item.id} model={item} />;
    });

    return (
      <div className="index">
        <Masonry
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}>
            {cards}
        </Masonry>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
