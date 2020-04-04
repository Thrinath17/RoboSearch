import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ robots: user }));
  }

  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value });
  };

  render() {
    const { robots, SearchField } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    var styles = {
      height: '100vh',
    };

    if (!robots.length) {
      return (
        <div className='valign-wrapper justify-content-center' style={styles}>
          <div class='preloader-wrapper big active'>
            <div class='spinner-layer spinner-blue'>
              <div class='circle-clipper left'>
                <div class='circle'></div>
              </div>
              <div class='gap-patch'>
                <div class='circle'></div>
              </div>
              <div class='circle-clipper right'>
                <div class='circle'></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='d-flex p-2 flex-column align-items-center justify-content-center'>
        <h1>ROBOTS</h1>
        <SearchBox onSearch={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
