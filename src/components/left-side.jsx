import { useState } from "react";

import Form from "./form";
import Select from "./select";
import Modal from "./modal";

const initialFormData = Object.freeze({});

export default function LeftSide() {
  const [formIsShown, setFormIsShown] = useState(true);
  const [formData, updateFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const handleChangeForm = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const zipHandlerChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmitForm = (e) => {
    const indicatorNumberDati = document.querySelector(
      ".indicator-number__dati"
    );
    const indicatorNumberOccupazione = document.querySelector(
      ".indicator-number__occupazione"
    );

    indicatorNumberDati.classList.remove("indicator-number__active");
    indicatorNumberOccupazione.classList.add("indicator-number__active");

    e.preventDefault();
    setFormIsShown(false);
  };

  const jobHandler = (e) => {
    e.stopPropagation();
    updateFormData({
      ...formData,
      job: e.target.innerText,
    });
  };

  const submitAllHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    const modalText = document.querySelector(".modal-text");

    fetch("https://hiring-test-dxxsnwdabq-oa.a.run.app/sendData?chaos=30", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.status);
        } else {
          setIsSubmitted(true);
        }
      })
      .catch((err) => {
        setServerError(true);
      });
  };

  return (
    <section id="left-side">
      <div className="page-left">
        <a href="#" className="sending-emails">
          Sending<span className="emails">Emails</span>
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(-90 12 12) translate(0 24) scale(1 -1)">
              <path
                fill="#7566a1"
                d="M12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71L12 2Z"
              />
            </g>
          </svg>
        </a>
        <h1 className="main-title">Registrati in un attimo</h1>
        <div className="page-indicator">
          <span className="indicator-number indicator-number__dati indicator-number__active">
            1
          </span>
          <span className="page-indicator__text">Dati personali</span>
          <div className="line"></div>
          <span className="indicator-number indicator-number__occupazione">
            2
          </span>
          <span className="page-indicator__text">Occupazione</span>
        </div>
        {(formIsShown && (
          <Form
            onSubmit={handleSubmitForm}
            onChange={handleChangeForm}
            zipChange={zipHandlerChange}
          ></Form>
        )) || (
          <Select onSubmit={submitAllHandler} onChange={jobHandler}></Select>
        )}
      </div>
      {isSubmitted && <Modal>Dati inviati con successo!</Modal>}
      {serverError && <Modal>Ops si è verificato un errore!</Modal>}
    </section>
  );
}
