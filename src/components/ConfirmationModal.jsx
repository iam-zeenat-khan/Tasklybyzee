import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const ConfirmationModal = ({ taskTitle, onConfirm, onCancel }) => {
  return (
    <Modal open={!!taskTitle} onClose={onCancel}>
      <Box
        className="bg-purple-300 p-6 rounded-lg shadow-lg text-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2 className="text-xl font-bold mb-4">Delete Task</h2>
        <p className="mb-6">
          Are you sure you want to delete the task <strong>{taskTitle}</strong>?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-400 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
