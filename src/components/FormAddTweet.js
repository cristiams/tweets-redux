import React, {useState} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationsActions";
import { addTweetAction } from "../actions/tweetsActions";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  });

  const dispatch = useDispatch();

  const errorForm = state => { dispatch(validationFormAddTweetAction(state))};

  const errorFormValue = useSelector(state => state.validations.errorFormAddTweet);

  const addTweet = state => { dispatch(addTweetAction(state))};

  const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

  const onChange = e => {
    setFormValue({
      ...formValue, // recupero el valor de mi objeto actual
      [e.target.name]: e.target.value // actualizo lo necesario, lo necesito en corchetes para poder hacer id dinamicos
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const { name, tweet } = formValue;

    if (!name || !tweet) {
      errorForm(true);
      // console.log('error');
    } else {
      errorForm(false);
      addTweet({
        id: uuidv4(),
        name,
        tweet,
        date: moment()
      });
      closeModal(false);
    }
  };
  
  return(

    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Control as="textarea" name="tweet" row="3" placeholder="Escribe lo que quieres comunicar..."
        />
      </Form.Group>
      <Button varian="primary" type="submit">
        Enviar Tweet
      </Button>
      {/* Si errorFormValue es true devuelve alert */}
      {errorFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
}