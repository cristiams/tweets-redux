import React from 'react'
import {Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {openCloseAddTweetModalAction} from "../actions/modalsActions"

export default function ModalView(props) {

  const {children} = props;

 // dispathc para ejecutar acciones

 const dispatch = useDispatch();

 const CloseAddTweetModal = state => dispatch(openCloseAddTweetModalAction(state));

 //useSelector para acceder a un valor en el store

 const isOpenModal = useSelector(state => state.modals.stateAddTweet);

//  console.log(isOpenModal);

  return (

    <Modal show={isOpenModal} onHide={() => CloseAddTweetModal(false)} size="lg" centered>
      {children}
    </Modal>
  );
}