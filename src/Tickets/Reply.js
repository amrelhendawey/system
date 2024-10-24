import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Reply = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 flex items-center space-x-2"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Replay
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex justify-center items-center bg-white">
          <div class="w-full ">
            <form class=" rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-xl font-bold mb-2"
                  for="username"
                >
                  Replay to this ticket :
                </label>
                <textarea
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Your Reply Here "
                />
              </div>
              <div class="flex items-center justify-end">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2"
                  type="button"
                >
                  <span> Send </span>
                  <SendIcon style={{ fontSize: "17px" }} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Reply;
