import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { AboutmeType } from "../utils/types/profile";
import Swal from "../utils/swal";

import "../styles/Deact.css";

const DeactivateAcc = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [datas, setDatas] = useState<AboutmeType>({});

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://projectfebe.online/users", {
        headers: { Authorization: `Bearer ${checkToken}` },
      })
      .then((res) => {
        const { data } = res.data;
        setDatas(data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleDelete(data: AboutmeType) {
    axios
      .delete("https://projectfebe.online/users", {
        headers: { Authorization: `Bearer ${checkToken}` },
      })
      .then((res) => {
        const { data, message } = res.data;
        setDatas(data);
        MySwal.fire({
          title: " Data was delet",
          text: message,
          showCancelButton: false,
        });
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
  }

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
                onClick={() => handleDelete(datas)}
              >
                Deactivate Account
              </button>
            </label>
          </label>
          <Link to="/">
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
