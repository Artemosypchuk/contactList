import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ContactList from "./components/contact_list/contact_list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import AddContact from "./components/AddContact/AddContact";
import MainMenu from "./components/mainMenu/mainMenu";
import EditContact from "./components/EditContact/EditContact";

class App extends React.Component {
  state = {
    List: [
      {
        favorite: false,
        name: "Jack Sparrow",
        description: "Capitan",
        avatar: 58,
        gender: "men",
        facebooklist: "CaptainJackSparrow",
        twitterList: "BlueEugeo_4y",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        id: 1
      },

      {
        favorite: false,
        name: "Julia Roberts",
        description: "Treny",
        avatar: 33,
        gender: "women",
        facebooklist:
          "pages/category/Actor/Julia-Roberts-officiel-134054339970575/",
        twitterList: "juliaroberts",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        id: 2
      },

      {
        favorite: false,
        name: "Geoffrey Rush",
        description: "Distructor",
        avatar: 18,
        gender: "men",
        facebooklist: "Geoffrey-Rush-419192964762662/",
        twitterList: "geoffreyrush",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        id: 3
      },

      {
        favorite: false,
        name: "Gal Gadot",
        description: "Cowboy",
        avatar: 75,
        gender: "women",
        facebooklist: "GalGadot/",
        twitterList: "galgadot",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        id: 4
      },

      {
        favorite: false,
        name: "Sylvester Stallone",
        description: "Descriptor",
        avatar: 1,
        gender: "men",
        facebooklist: "SylvesterStallone/",
        twitterList: "theslystallone",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        id: 5
      }
    ],
    Item: []
  };
  Editor = id => {
    this.state.Item = [];
    const index = this.state.List.findIndex(elem => elem.id === id);
    const Object = this.state.List[index];
    this.Object = { id: this.state.List.length * 100 };
    const NewList = [...this.state.Item, Object];
    this.state.List.splice(index, 1);
    this.setState(() => {
      return {
        Item: NewList
      };
    });
  };

  EditContact = (name, description, avatar, gender, id) => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    const Edited = {
      name: name,
      description: description,
      avatar: avatar,
      gender: gender,
      favorite: this.state.Item[0].favorite,
      id: this.state.Item[0].id
    };
    console.log(this.state.Item);
    const NewList = [...this.state.List, Edited];
    this.setState(() => {
      return {
        List: NewList
      };
    });
  };
  onAddNewContact = (name, description, avatar, gender,favorite) => {
    const newContact = {
      name: name,
      description: description,
      avatar: avatar,
      gender: gender,
      favorite: favorite,
      id: this.state.List.length + 1
    };
    const NewList = [...this.state.List, newContact];
    this.setState(() => {
      return {
        List: NewList
      };
    });
  };

  onDelete = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    let NewList = [];
    let counter = 0;
    for (let i = 0; i < this.state.List.length; i++) {
      if (i !== index) {
        NewList[counter] = this.state.List[i];
        counter++;
      }
    }
    this.setState(() => {
      return {
        List: NewList
      };
    });
  };

  Favor = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    const NewList = this.state.List.slice();
    NewList[index].favorite = !NewList[index].favorite;
    if (NewList[index].favorite) {
      NewList[index].id = NewList[index].id * 10;
    } else {
      NewList[index].id = NewList[index].id / 10;
    }
    NewList.sort((a, b) => {
      return b.id - a.id;
    });
    this.setState(() => {
      return {
        List: NewList
      };
    });
  };

  render() {
    return (
      <Router>
        <div className="container bootstrap snippet">
          <h1> Contact List </h1>

          <MainMenu></MainMenu>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <ContactList
                  ContactList={this.state.List}
                  onDelete={this.onDelete}
                  Favor={this.Favor}
                  Editor={this.Editor}
                />
              )}
            ></Route>
            <Route path="/about" exact component={About}></Route>
            <Route
              path="/add"
              exact
              component={() => (
                <AddContact AddNewContact={this.onAddNewContact} />
              )}
            ></Route>
            <Route
              path="/edit"
              exact
              component={() => (
                <EditContact
                  Editor={this.state.Item}
                  EditContact={this.EditContact}
                />
              )}
            ></Route>
            <Route path="*" exact component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
