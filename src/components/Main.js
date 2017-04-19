require('normalize.css/normalize.css');
require('semantic-ui-css/semantic.min.css');
require('styles/App.scss');

import ApiService from './../services/ApiService.js';
import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import Masonry from 'react-masonry-component';
import Menu from './HeaderMenu.js';
import ModelCard from './ModelCard.js';
import ModelModal from './ModelModal.js';

const items = ApiService.getModels();

const masonryOptions = {
    itemSelector: '.card',
    gutter: 20,
    initLayout: true,
    fitWidth: true,
    transitionDuration: 0
};

class AppComponent extends React.Component {
  state = {
    openModel: null
  };

  onOpenModel(item) {
    this.setState({
      openModel: item
    });
  }

  render() {
    let cards = items.map(item => {
      return <ModelCard key={item.id} model={item} onOpenModel={this.onOpenModel.bind(this)} />;
    });

    return (
      <div className="index">
        <div>
          <br />
          <Header as='h2' icon textAlign='center'>
            <Icon name='idea' circular />
            <Header.Content>
              Pin3D
            </Header.Content>
          </Header>
          <Header as='h4' icon textAlign='center'>Inspiration from sharing</Header>
        </div>
        <Menu />
        <ModelModal model={this.state.openModel} />
        <Masonry className={'masonry-gallery'}
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
