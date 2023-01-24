import React from "react";
import { Link } from "react-router-dom";
import "../styles/Deact.css";

const DeactivateAcc = () => {
  return (
    <>
      <div className="w-full bg-white h-screen flex flex-col justify-center mx-auto">
        <h1 className="title-deact">Deactivate Account</h1>
        <p className="deact-paragraf">
          Deactivating your account will permanently remove all your information
          from our platform. Your account cannot be reactivated. If you're sure
          you want to deactivate, select the 'Deactivate Account' button. If you
          have any issues, please let us know before deactivating.
        </p>
        <div className="flex flex-row mx-auto mt-8">
          {/* The button to open modal */}
          <label
            htmlFor="my-modal-4"
            className="btn "
            style={{
              backgroundColor: "#d93333",
              marginTop: "1rem",
              borderRadius: "10px",
              color: "white",
              border: "none",
              fontFamily: "Poppins",
            }}
          >
            Deactivate Account
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer ">
            <label className="modal-box relative bg-white p-12" htmlFor="">
              <p className="py-4 text-black">
                Confirm account deactivation by typing 'DEACTIVATE' and clicking
                'Deactivate Account' button. This is permanent. Please be sure
                before proceeding. Contact us if you have any questions
              </p>
              <input
                type="text"
                placeholder={`Type "Deactivate"`}
                className="input w-full "
              />
              <button
                className="btn btn-wide"
                style={{
                  backgroundColor: "#d93333",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  marginTop: "1rem",
                }}
              >
                Deactivate Account
              </button>
            </label>
          </label>
          <Link to="/profile">
            <button
              className="btn"
              style={{
                marginTop: "1rem",
                borderRadius: "10px",
                color: "white",
                marginLeft: "1rem",
                width: "100px",
              }}
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeactivateAcc;
