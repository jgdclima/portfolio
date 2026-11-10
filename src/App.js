import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <div label="JL" hierarchy="primary">
            <Banner></Banner>
          </div>
          {/* Template / placeholder pages (Projects, Creative, Case Studies, Resume)
              are not rendered on the website until real content is added */}
        </Tabs>
      </div>
    );
  }
}

export default App;
