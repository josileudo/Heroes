import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import spider from "../../assets/spider-man.png"

import "./styles.scss"

interface DataProps {
  id: number
  title: string;
  image: string;
  date: string;
  price: string;
  description: string;
}

interface ModalProps {
  showModal: boolean;
  setShowModal: boolean;
  data: Array <DataProps>
}

export const Modal = ({ showModal, setShowModal, data}: ModalProps) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <div className="modal-container" onClick={closeModal} ref={modalRef}>
          <div className="animated-view"style={animation}>
            <div className="modal-wraper" showModal={showModal}>
             <div className="modal-img"><img src={data.image} alt={data.title}/></div>
              <div className="modal-content">
                <h1>{data.title}</h1>
                <p>{data.description ?? "sem descrição"}</p>
                <div className="comics-info">
                  <div className="date-infor">
                    <p className="infor-card">PUBLICADO</p>
                    <p className="infor-data"> 22/22/22</p>
                  </div>
                  <div className="price-card">
                    <p className="price-infor">PREÇO</p>
                    <p className="price">$ 5.80</p>
                  </div>
                </div>
              </div>  
              <li className="close-modal-button"
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};