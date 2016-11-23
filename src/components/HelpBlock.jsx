import React from 'react';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';

export default class HelpBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {helpTextVisible: false};
    this.handleHelpClick = this.handleHelpClick.bind(this);
  }

  handleHelpClick() {
    this.setState({helpTextVisible: !this.state.helpTextVisible});
  }

  renderHelpText() {
    if (this.state.helpTextVisible) {
      return <div>{this.props.children}</div>;
    } else {
      return null;
    }
  }

  render() {
    const {placement} = this.props;

    return (
      <div onClick={this.handleHelpClick} style={this.props.style}>
        <HelpOutline style={{float: placement}} />
        <br />
        {this.renderHelpText()}
      </div>
    );
  }
}

HelpBlock.defaultProps = {
  placement: 'left'
};
