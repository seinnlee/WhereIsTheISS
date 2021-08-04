import React from 'react';
import Map from './Map';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      lat: 0,
      lon: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(data => {
          this.setState({ lat: data['iss_position']['latitude'] });
          this.setState({ lon: data['iss_position']['longitude'] });
        })
    }, 1000)
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    const { lat, lon } = this.state;
    return (
      <div className='tc'>
        <h1>Where is the ISS Now?</h1>
          <p>latitude: {lat}</p>
          <p>longitude: {lon}</p>
        {/* <Map location={this.state} /> */}
      </div>
    )
  }
}

export default App;
