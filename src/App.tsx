import { Component } from 'react';
import './App.css';
import { MyComponent } from './mycomponent';

type Props = {};
class App extends Component<Props> {
  render() {
    return <MyComponent />;
  }
}

export default App;
