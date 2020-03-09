import * as React from 'react';
import * as Components from '../../components';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="conatiner">
        <div className="row">
          <div className="col-sm">
            <h1>1</h1>
            <Components.Radio />
          </div>
          <div className="col-sm">
            <h1>2</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <h1>3</h1>
          </div>
          <div className="col-sm">
            <h1>4</h1>
          </div>
          <div className="col-sm">
            <h1>5</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
