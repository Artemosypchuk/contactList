import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Search from "./components/SearchComponent/search";
import ContactList from "./components/contact_list/contact_list";

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
        favorite: true,
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
        favorite: true,
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
        favorite: true,
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
    ]
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
      return (
        console.log(NewList),
        {
          List: NewList
        }
      );
    });
  };

  Favor = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    var NewList = this.state.List.slice();
    NewList[index].favorite = !NewList[index].favorite;

    this.setState(() => {
      return {
        favorite:this.NewList
      };
    });
  };

  render() {
    return (
      <div className="container bootstrap snippet">
        <h1> Contact List </h1> <Search> </Search>
        <ContactList
          ContactList={this.state.List}
          Favor={this.Favor}
          onDelete={this.onDelete}
        ></ContactList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
