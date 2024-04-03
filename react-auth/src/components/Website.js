import React, { Component } from 'react';
import CountUp from 'react-countup/';
import '../App.css';
class Website extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], isInternetConnected: true };
  }

  componentDidMount() {
    const source = new EventSource('http://localhost:5000/website');
    source.addEventListener('website', (event) => {
      const message = JSON.parse(event.data);
      if (message.status === 'error' && message.message === 'No internet connection') {
        this.setState({ isInternetConnected: false });
      } else {
        this.setState((prevState) => ({
          messages: [
            ...prevState.messages,
            {
              text: message.status,
              responseTime: message.responseTime,
              statusCode: message.statusCode,
              date: message.date,
            },
          ],
        }));
      }
    }, false);
  }

  render() {
    return (
      <center>
        <h5>Checking AECE Website... {this.renderMessages()}</h5>
      </center>
    );
  }

  renderMessages() {
    if (!this.state.isInternetConnected) {
      return (
        <center>
          <p style={{ color: 'red' }}>No internet connection</p>
        </center>
      );
    }

    return this.state.messages.slice(-1).map((message) => (
      <center key={message.responseTime}>
        <span className="loder-116"></span>
        {message.text === 'success' ? (
          <div>
            <h5 style={{ color: 'green' }}>
              AECE Website is available {message.date}
            </h5>
            <div className='text-[20px] font-tertiary text-gradient
                 mb-2'>
                 Response Time: { <CountUp start={0} end={message.responseTime} duration={1}/>} ms
            </div>
          </div>
        ) : message.text === 'error' ? (
          <div>
            <p style={{ color: 'red' }}>
              AECE Website is unavailable {message.date}
            </p>
            <p>{message.message}</p>
          </div>
        ) : (
          <p>Checking website availability...</p>
        )}
      </center>
    ));
  }
}

export default Website;
