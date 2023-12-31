import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setCloseModal } from "../../redux/actions/modal";
import { Button } from "@mui/material";
export default function Modal(props) {
  const handleBackgroundClick = (event) => {
    if (!event.target.closest(".modal-content")) {
      closeModal();
    }
  };
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setCloseModal());
  };
  const { closeButton, isOpen, modalAction, modalHeader, modalOk, modalText } =
    props;
  return isOpen ? (
    <div className="modal-background" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>{modalHeader}</h3>
          {closeButton ? (
            <Button variant="text" onClick={() => closeModal()}>
              &times;
            </Button>
          ) : null}
        </div>
        <div className="modal-body">
          <p>{modalText}</p>
        </div>
        {modalAction && (
          <div className="modal-footer">
            <Button variant="text" onClick={() => modalOk()}>
              {modalAction[0]}
            </Button>
            <Button variant="contained" onClick={() => closeModal()}>
              {modalAction[1]}
            </Button>
          </div>
        )}
      </div>
    </div>
  ) : null;
}
Modal.defaultProps = {
  modalAction: ["Так", "Ні"],
};
Modal.propTypes = {
  modalHeader: PropTypes.string,
  closeButton: PropTypes.bool,
  action: PropTypes.array,
  modalOk: PropTypes.func,
  modalCancel: PropTypes.func,
  text: PropTypes.string,
};
