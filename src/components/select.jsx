import { useState } from "react";

import Options from "./options";

export default function Select(props) {
  const showMenuHandler = () => {
    // Dorpdown select
    const selected = document.querySelector(".selected");
    const selectedText = document.querySelector(".selected-text");
    const selectArrow = document.querySelector(".select-arrow");
    const optionsContainer = document.querySelector(".options-container");
    const optionsList = document.querySelectorAll(".option");
    // Toggle the select menu
    optionsContainer.classList.toggle("active");
    selectArrow.classList.toggle("rotate-180");
    selectArrow.classList.toggle("rotate-0");

    optionsList.forEach((option) => {
      // Select the option and closing the select menu
      option.addEventListener("click", () => {
        selectedText.innerText = option.innerText;
        optionsContainer.classList.remove("active");
        selectArrow.classList.remove("rotate-180");
        selectArrow.classList.add("rotate-0");
        selected.style.color = "var(--primary-color)";
      });
    });
  };

  return (
    <div className="occupazione">
      <h4 className="action-title">Qual'è la tua occupazione attuale?</h4>
      <form className="select" onSubmit={props.onSubmit}>
        <label className="form-section-title" htmlFor="occupazione">
          Occupazione
        </label>
        <div className="select-box col-6">
          <div className="options-container">
            <div className="selected-container">
              <div className="selected" onClick={showMenuHandler}>
                <div className="selected-text">Seleziona</div>
                <svg
                  className="select-arrow rotate-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="#0b256e" d="m12 15l-5-5h10Z" />
                </svg>
              </div>
            </div>
            <div className="markup-options">
              <Options onChange={props.onChange}></Options>
            </div>
          </div>
        </div>
        <input
          className="btn btn-form"
          type="submit"
          name="conferma"
          id="conferma"
          value="Conferma"
        />
      </form>
    </div>
  );
}
