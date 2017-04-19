import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class ModelCard extends React.Component {
  onClickImage() {
    this.props.onOpenModel(this.props.model)
  }

  render() {
    return <Card>
      <Card.Content>
        <div className="right floated meta">{this.props.model.uploaded}</div>
        <Card.Header className="left floated">
          {this.props.model.name}
        </Card.Header>
      </Card.Content>
      <div className="image">
          <Image src={this.props.model.thumbnail} className="cursor-pointer" onClick={this.onClickImage.bind(this)} />
      </div>
      <Card.Content>
        <Icon name="comment" />
        {this.props.model.comments.length} comments
        <span className="right floated">
          <Icon name="heart" className="outline" />
          {this.props.model.likes} likes
        </span>
      </Card.Content>
      <Card.Content extra>
        <div className="left floated">
          <Icon name="tags" /> {this.props.model.tags.join(', ')}
        </div>
        <div className="right floated author">
          <Image size='mini' avatar src={this.props.model.author.avatar} /> {this.props.model.author.name}
        </div>
      </Card.Content>
    </Card>;
  }
}