import React from "react";

const ModalValidation = ({ updateData, changeHandle }) => {
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
            <div className="card p-1">
              <div class="container mt-1">
                <form action="/action_page.php" class="was-validated">
                  <div class="mb-2 mt-2">
                    <label htmlFor="name" class="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      required
                      value={updateData.name}
                      onChange={changeHandle}
                    />

                    <div class="invalid-feedback">This field is required.</div>
                  </div>

                  <div class="mb-3">
                    <label htmlFor="email" class="form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      required
                      value={updateData.email}
                      onChange={changeHandle}
                    />

                    <div class="invalid-feedback">This field is required.</div>
                  </div>

                  <div class="mb-3">
                    <label htmlFor="phone" class="form-label">
                      Phone:
                    </label>
                    <input
                      type="phone"
                      class="form-control"
                      id="phone"
                      name="phone"
                      required
                      value={updateData.phone}
                      onChange={changeHandle}
                    />

                    <div class="invalid-feedback">This field is required.</div>
                  </div>

                  <div class="mb-3">
                    <label htmlFor="website" class="form-label">
                      Website:
                    </label>
                    <input
                      type="website"
                      class="form-control"
                      id="website"
                      name="website"
                      required
                      value={updateData.website}
                      onChange={changeHandle}
                    />

                    <div class="invalid-feedback">This field is required.</div>
                  </div>
                </form>
              </div>
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
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalValidation;
