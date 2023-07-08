import { MODAL } from "../types";
const initialState = {
  modalContent: {
    modalHeader: "",
    modalText: "",
    modalAction: [],
    modalOk: null,
  },
  modalOpen: false,
};
export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL.SET_MODAL:
      return {
        ...state,
        modalContent: action.payload,
        modalOpen: true,
      };
    case MODAL.BUY_MODAL:
      return {
        ...state,
        modalContent: action.payload,
        modalOpen: true,
      };
    case MODAL.MODAL_CLOSE:
      return {
        ...state,
        modalContent: initialState,
        modalOpen: false,
      };
    case MODAL.SET_REMOVE_MODAL:
      return {
        ...state,
        modalContent: action.payload,
        modalOpen: true,
      };
    default:
      return state;
  }
}
