import React, {Component} from 'react';
import CountUp from 'react-countup/';
import '../App.css';
class Repository  extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
  }

  componentDidMount() {
    const source = new EventSource('http://localhost:7000/repository');
    source.addEventListener(
      'sse',
      event => {
        const message = JSON.parse(event.data);
        this.setState({
          messages: [
            ...this.state.messages,
            {
              text: message.status,
              responseTime: message.responseTime,
              statusCode: message.statusCode,
              date: message.date,
            },
          ],
        });
      },
      false,
    );
  }
  render() {
    return (
     <center><h5>Checking AECE Repository . . . {this.renderMessages()}</h5></center>
    );
  }
  renderMessages() {
    return this.state.messages.slice(-1).map(message => (
      <center>
        <span class="loder-116"></span>
      { message.text === 'success' ? (
        <div>
          <h5 style={{ color: 'green' }}>AECE Repository is available {message.date}</h5>
          <div className='text-[20px] font-tertiary text-gradient
                 mb-2'>
                 Response Time: { <CountUp start={0} end={message.responseTime} duration={3}/>} ms
                 </div>
        </div>
      ) : message.text === 'error' ? (
        <div>
          <p style={{ color: 'red' }}>AECE Repository is unavailable {message.date} </p>
          <p>{message.text}</p>
        </div>
      ) : (
        <p>Checking AECE Repository availability...</p>    
      )}
    </center>
    ));
  }
  
}
export default Repository;
