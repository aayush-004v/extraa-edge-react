import React from "react";

const FormModal = ({ updateData, changeHandle, updateNow }) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Basic Modal
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card p-2">
              <form>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control shadow-none"
                    value={updateData.name}
                    onChange={changeHandle}
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control shadow-none"
                    value={updateData.phone}
                    onChange={changeHandle}
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control shadow-none"
                    value={updateData.email}
                    onChange={changeHandle}
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="">Website</label>
                  <input
                    type="text"
                    name="website"
                    className="form-control shadow-none"
                    value={updateData.website}
                    onChange={changeHandle}
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className=" btn btn-primary"
              data-bs-dismiss="modal"
              // onClick={updateNow}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
