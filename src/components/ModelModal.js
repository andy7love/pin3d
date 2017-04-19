import React from 'react'
import { Image, Modal, Icon, Label } from 'semantic-ui-react'

export default class ModelModal extends React.Component {
  state = {
    open: false
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.model !== null) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  close = () => this.setState({ open: false });

  render() {
    if(this.props.model === null)
      return null;

    return <Modal dimmer={'blurring'} open={this.state.open} onClose={this.close} closeIcon='close'>
        <Modal.Header className="left floated">
          {this.props.model.name}
        </Modal.Header>
        <Modal.Content image>
          <Image wrapped size="large" centered src={this.props.model.image} />
        </Modal.Content>
        <Modal.Actions>
          <div className="right floated">
            <Label>
              <Icon name='tags' color='teal' />
              {this.props.model.tags.length}
              <Label.Detail>Tags</Label.Detail>
            </Label>

            <Label>
              <Icon name='comments' color='blue' />
              {this.props.model.comments.length}
              <Label.Detail>Comments</Label.Detail>
            </Label>

            <Label>
              <Icon name='heart' color='red' />
              {this.props.model.likes}
              <Label.Detail>Likes</Label.Detail>
            </Label>
          </div>
        </Modal.Actions>
      </Modal>;
  }
}