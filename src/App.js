import { React, Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import DataBoxes from "./components/DataBoxes";
import DataTitle from "./components/DataTitle";
import CountrySelect from "./components/CountrySelect";
class App extends Component {
  state = {
    loading: true,
    title: "Global",
    dataDate: "",
    stats: [],
    countries: [],
    loadingImage: "../assets/hourglass.gif",
    dataApi: [],
  };

  fetchCovidData = () => {
    axios({
      url: `https://api.covid19api.com/summary`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        this.setState({
          loading: false,
          dataApi: response.data,
          countries: response.data.Countries,
          dataDate: response.data.Date,
          stats: response.data.Global,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.fetchCovidData();
  }
  onUpdate = (data) => {
    const country = this.state.countries.find(
      (item) => item.ID === String(data.country_id)
    );
    this.setState({
      stats: country,
      title: country.Country,
    });
  };
  render() {
    const box = "";
    if (!this.state.loading) {
      this.box = (
        <main>
          <DataTitle text={this.state.title} dataDate={this.state.dataDate} />
          <DataBoxes data={this.state.stats} />
          <CountrySelect
            onUpdate={this.onUpdate}
            countries={this.state.countries}
          />
        </main>
      );
    } else {
      this.box = (
        <main class="flex flex-col align-center justify-center text-center">
          <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data</div>
          <img src={this.state.loadingImage} class="w-24 m-auto" alt="" />
        </main>
      );
    }
    return (
      <div className="App">
        <Header />
        <div className="container mx-auto">{this.box}</div>
      </div>
    );
  }
}

export default App;
