import React, {Component} from 'react';
//import { motion } from 'framer-motion';
import '../App.css';
import CountUp from 'react-countup/';
//import {fadeIn} from '../components/src/variants'
class Crl  extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    
  }
  
  componentDidMount() {
    const source = new EventSource('http://localhost:3003/crl');
    source.addEventListener(
      'crl',
      event => {
        const message = JSON.parse(event.data);
        this.setState({
          messages: [
            ...this.state.messages,
            {
              lastUpdate: message.lastUpdate,
              nextUpdate: message.nextUpdate,
              date: message.date,
              version:message.version,
              Issuer:message.Issuer,
              signatureAlgorithm:message.signatureAlgorithm,
              revokedCertificates:message.revokedCertificates,
              signatureValue:message.signatureValue,
              duration:message.duration
              //CalculatedCRLHash: message.CalculatedCRLHash,
              //Hashesmatch: message.Hashesmatch
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
          <p>Date&Time: {message.date}</p>
          <p>Last Update: {message.lastUpdate}  </p>
          <p style={{ color: 'green' }}>Next Update: {message.nextUpdate}</p>
          <p>Revoked Certificates: {message.revokedCertificates}</p>
          <div style={{ color: 'green' }}>
            {<CountUp start={0} end={message.duration} duration={3}/>} Days left 
          </div>    
      </center>
    ));
  }
  
}
export default Crl;
