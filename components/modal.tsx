import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function CountryModal({ removeModal, country }: any) {
  const hideModal = () => {
    removeModal();
  };
  console.log(country);
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="flag-left">
            <span className="close" onClick={hideModal}>
              &times;
            </span>
            <h3 className="country-modal">{country[0]?.name.official}</h3>
            <div className="country-css">
              <span>Timezones:</span>
              <h5>{country[0]?.timezones[0]}</h5>
            </div>
            <div className="country-css">
              <span>Capital:</span>
              <h5>{country[0]?.capital[0]}</h5>
            </div>
            <div className="country-css">
              <span>Population:</span>
              <h5>{country[0]?.population}</h5>
            </div>
          </div>
          <div className="flag-right">
            <img
              src={country[0]?.flags.png}
              alt={country[0]?.name.official}
              className="flag-country"
            />
          </div>
        </div>
      </div>
    </>
  );
}
