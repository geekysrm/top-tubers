import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import TopChannels from "./components/top-channels/TopChannels";
import ChannelPage from "./components/channel-page/ChannelPage";
import Footer from "./components/footer/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={TopChannels} />
            <Route exact path="/channel/:id"  component={ChannelPage}  />
            <div className="container" />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
