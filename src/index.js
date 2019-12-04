import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Search from "./components/SearchComponent/search";
import ContactList from "./components/contact_list/contact_list";

class App extends React.Component {
  List = [
    {
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
      id: "a1"
    },

    {
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
      id: "a2"
    },

    {
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
      id: "a3"
    },

    {
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
      id: "a4"
    },

    {
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
      id: "a5"
    }
  ];
  render() {
    return (
      <div className="container bootstrap snippet">
        <h1> Contact List </h1> <Search> </Search>
        {""}
        <ContactList ContactList={this.List}> </ContactList>
        {""}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
