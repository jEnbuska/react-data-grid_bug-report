import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid'
import './App.css';


const columns = [
    {
        key: 'a',
        name: 'a',
        width: 50,
    },
    {
        key: 'b',
        name: 'b',
        width: 150,
    },
    {
        key: 'c',
        name: 'c',
        width: 150,
    },
];
const rows = Array.from(Array(20)).map((val, i) => { // generate some rows
    return {
        id: i,
        name: i,
        level: i
    };
});

const stages = ['Click Nav Area','Grid does not expand to its parents width','Grid expands before Navigation get\'s expanded','Stuck with same Grid size']
class App extends Component {

  state = {closed: false, stageIndex: 0};
  render() {
    const {closed} = this.state;
      return (
          <div className="app">
              <div className={'app-navigation' + (closed ? ' app-navigation-closed' : '')} onClick={this.onToggle}>Nav</div>
              <div className="app-content">
                  <div>
                  Content
                      <ReactDataGrid
                          className="grid-outline"
                          columns={columns}
                          rows={rows}
                          rowsCount={rows.length}
                          minWidth={0}
                          rowGetter={index => rows[index]}
                      />
                  </div>
                  <h3>{stages[this.state.stageIndex]}</h3>
              </div>
          </div>
      );
  }

  onToggle = () => {
        const {stageIndex, closed} = this.state;
        this.setState({
            stageIndex: stageIndex<3 ? stageIndex+1 : stageIndex,
            closed: !closed
        })
    };
}

export default App;
