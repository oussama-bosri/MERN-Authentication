import React, {Component} from 'react';
import '../App.css';
class Ocsp  extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
  }

  componentDidMount() {
    const source = new EventSource('http://localhost:3005/ocsp');
    source.addEventListener(
      'ocsp',
      event => {
        const message = JSON.parse(event.data);
        this.setState({
          messages: [
            ...this.state.messages,
            {
              text: message.value,
              date: message.date,
              id: this.state.messages.length + 1,
            },
          ],
        });
      },
      false,
    );
  }
  render() {
    return (
     <center><h5>Receiving message from server . . . {this.renderMessages()}</h5></center>
    );
  }
  renderMessages() {
    return this.state.messages.slice().reverse().map(message => (
      <center key={message.id}>
      {message.text === 'successful' ? (
        <h5 style={{ color: 'green' }}>PRD OCSP Service working successfuly {message.date}</h5>
      ) : (
        <h5 style={{ color: 'red' }}>{message.text} {message.date}</h5>
      )}
      
    </center>
    ));
  }
  
}

export default Ocsp ;
