import { ModalHeader } from "flowbite-react";
import React from "react";
import Modal from "react-modal";

const charModal = ({ user, isOpen, src, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          padding: "0rem",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          borderRadius: "8px",
          width: "450px",
          border: "none",
          boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <div className="w-full flex justify-between px-6 pt-4 pb-12">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <button onClick={onClose} className="close-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={6}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="w-full flex justify-between items-center px-6 pb-4 gap-8 py-6 pb-32">
        <div className="w-0.3 justify-start flex-row">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={`https://picsum.photos/200/300?random=${user.url}`}
            //   https://pokeapi.co/api/v2/pokemon/ditto

            alt="Bonnie image"
          />
        </div>

        <div className="w-full flex flex-1 flex-col gap-4 ">
          <p>Height: {user.height} meters</p>
          <p>Mass: {user.mass} kilograms</p>
          <p>
            Date Added to Swapi API:{" "}
            {new Date(user.created)
              .toLocaleDateString("en-GB")
              .split("/")
              .reverse()
              .join("-")}
          </p>
          <p>Birth Year: {user.birth_year}</p>
        </div>
      </div>
    </Modal>
  );
};

export default charModal;

///////////////////////////////////////////////////////////

