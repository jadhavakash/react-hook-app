import './styles/App.css';
import Form from './components/forms/Form';
import {useForm,FormProvider} from 'react-hook-form';
import Main from './components/forms/Main';
import Navbar from './components/elements/Navbar';
import Contacts from './components/contacts/Contacts';
import { povider, Provider } from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Foodindex from './components/food/Foodindex';
import Newsindex from './components/news/NewsApp';
import Bradindex from './components/temprature/BradIndex';
import Contactus from './Contact';
import Auth from './auth/Authindex';
function App() {
  const methods = useForm();
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Main/> */}
          <Navbar/>
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/tempindex" component={Bradindex}/>
                <Route exact path="/newsindex" component={Newsindex}/>
                <Route exact path="/foodindex" component={Foodindex}/>
                <Route exact path="/contacts/add" component={AddContact}/>
                <Route exact path="/contacts/edit/:id" component={EditContact}/>
                <Route exact path="/contactus" component={Contactus}/>
                <Route exact path="/auth" component={Auth}/>
              </Switch>
              {/* <Contacts/> */}
            </div>
          </div>
        </div>
      </Router>
    </Provider>
    
    
  );
}

export default App;
