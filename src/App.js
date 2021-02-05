import React from 'react';
import {Container} from "react-bootstrap";
import store from "./store";
import {Provider} from "react-redux";

import Menu from "./components/Menu";
import Modal from "./components/Modal";
import FormAddTweet from "./components/FormAddTweet";
import TweetsList from "./components/TweetsList";

function App() {
  return (
    <Provider store={store}>
      <Menu/>
      <Container className="mt-5">
        <h1 className="text-center">Tweets</h1>
        <TweetsList/>
      </Container>
      <Modal>
        <FormAddTweet />
      </Modal>
    </Provider>
  );
}

export default App;
