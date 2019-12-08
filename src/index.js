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
    // const index = this.state.List.find(e => e.id === id);
    // let FavList = [];
    // let UnFavList = [];
    // for (let i = 0; i < this.state.List.length; i++) {
    //   if (index.favorite) {
    //     index.favorite = !index.favorite
    //     UnFavList[i] = this.state.List[i];
    //   }
    //   index.favorite = !index.favorite
    //   FavList[i] = this.state.List[i];
    // }
    // console.log(index)
    // console.log("fav", FavList, "unfav", UnFavList);
    // let newList = FavList.concat(UnFavList);
    // this.setState(() => {
    //   return {
    //     List: newList
    //   };
    // });
    ///-----------------------------------------------------------------------------
    // const index = this.state.List.find(elem => elem.id === id);
    // const newList = this.state.List.map(o => {
    //   if (o.id === index.id) {
    //     index.favorite = !index.favorite;
    //     return index;
    //   }
    //   return o;
    // });
    // console.log(index.id, "index.favorite=>", index.favorite);
    // this.setState(() => {
    //   return (
    //     console.log(newList),
    //     {
    //       List: newList
    //     }
    //   );
    // });
    //////////////////--------------------------------------------------------------------
    // const index = this.state.List.find(elem => elem.id === id);
    // console.log("was",index, index.favorite);
    // this.setState(() => {
    //   index.favorite = !index.favorite;
    //   console.log("now",index, index.favorite);
    //   console.log(this.state.List);
    //   return this.state.List;
    // });
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
