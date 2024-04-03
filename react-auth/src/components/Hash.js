import React, {Component} from 'react';
import '../App.css';
class Hash  extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    
  }
  
  componentDidMount() {
    const source = new EventSource('http://localhost:3007/hash');
    source.addEventListener(
      'hash',
      event => {
        const message = JSON.parse(event.data);
        this.setState({
          messages: [
            ...this.state.messages,
            {
              CalculatedCRLHash:message.CalculatedCRLHash,
              Hashesmatch:message.Hashesmatch,
              Hasherror:message.Hasherror

            },
          ],
        });
      },
      false,
    );

    source.addEventListener(
      'hash',
      event => {
        const message = JSON.parse(event.data);
        this.setState({
          messages: [
            ...this.state.messages,
            {
              CalculatedCRLHash:message.CalculatedCRLHash,
              Hashesmatch:message.Hashesmatch,
            },
          ],
        });
      },
      false,
    );
  }
  
  render() {
    return (
     <center>
      <h5>{this.renderMessages()}</h5>
    </center>
    );
  }
  renderMessages() {
    return this.state.messages.slice(-1).map(message => (
      <center> 
          <p style={{ color: 'green' }}>Hash match: {message.Hashesmatch}</p>
          <p>{message.CalculatedCRLHash}</p> 
          <p>{message.Hasherror}</p>
      </center>
    ));
  }
  
}
export default Hash;
