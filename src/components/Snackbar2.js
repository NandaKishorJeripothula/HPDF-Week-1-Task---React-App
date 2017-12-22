import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class Snackbar2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 5000,
      message: 'This Site is best-viewed in DESKTOP VIEW since its not a mobile friendly :)',
      open: true,
    };
  }
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}