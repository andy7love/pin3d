import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class ModelCard extends React.Component {
  render() {
    return <Card>
      <Image src={this.props.image} />
      <Card.Content>
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Meta>{this.props.uploaded}</Card.Meta>
        <Card.Description>{this.props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='tag' /> 10
        </a>

        <a>
          <Icon name='comments' /> 10
        </a>

        <a>
          <Icon name='share alternate' /> 10
        </a>

        <a>
          <Icon name='star' /> 10
        </a>
      </Card.Content>
    </Card>;
  }
}

export default ModelCard