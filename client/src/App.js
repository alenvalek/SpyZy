import './App.css';
import Webs from './components/Webs'
import WebsForm from './components/WebsForm'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WebsForm />
          <hr/>
        <Webs />
      </div>
    </Provider>
  );
}

export default App;
