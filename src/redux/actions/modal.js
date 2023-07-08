import { MODAL } from "../types";
import { getFavProduct, getBasketProduct } from "./products";

const setOverflowBody = () => document.body.classList.add("modal-open");
const removeOverflow = () => document.body.classList.remove("modal-open");

export function buyProductModal(formik, dispatch) {
  const { name, lastName, phone, age, size } = formik.values;
  setOverflowBody();
  const data = {
    modalHeader: "Перевірте вірність введених данних",
    modalText: `Ваше ім'я: ${name}. Ваше прізвище: ${lastName}. Ваш номер телефону: ${phone}. Ваш вік: ${age}. Розміри які вас цікавлять: ${size}`,
    closeButton: true,
    modalAction: ["Так, все вірно", "Упс, помилка"],
    modalOk: () => {
      const bouthItems = JSON.parse(localStorage.getItem("basketProducts"));
      localStorage.removeItem("basketProducts");
      dispatch(setCloseModal());
      dispatch(getBasketProduct());
      removeOverflow();
      console.log("Придбані товари:", bouthItems);
      console.log("Інформація з форми:", formik.values);
      alert(
        "Замовлення успішно прийнято! Консультант незабаром зв'яжеться з вами. Дякуємо, що обираєте нас! Слава Україні!"
      );
    },
  };
  return {
    type: MODAL.BUY_MODAL,
    payload: data,
  };
}
export function setBaskModal(elem, dispatch) {
  setOverflowBody();
  const data = {
    modalHeader: "Підтвердіть Вашу дію.",
    modalText: "Ви дійсно хочете додати товар до кошику?",
    closeButton: true,
    modalAction: ["Звісно!", "Ні,дякую!"],
    modalOk: () => {
      const newArr = JSON.parse(localStorage.getItem("basketProducts")) || [];
      if (newArr.find((el) => el.name === elem.name)) {
        alert("Цей продукт вже додано до кошику!");
        dispatch(setCloseModal());
        removeOverflow();
      } else {
        newArr.push(elem);
        localStorage.setItem("basketProducts", JSON.stringify(newArr));
        dispatch(setCloseModal());
        dispatch(getBasketProduct());
        removeOverflow();
      }
    },
  };

  return {
    type: MODAL.SET_MODAL,
    payload: data,
  };
}
export function setFavModal(elem, dispatch) {
  setOverflowBody();
  const data = {
    modalHeader: "Підтвердіть Вашу дію.",
    modalText: "Ви дійсно хочете додати товар до улюбленого?",
    closeButton: true,
    modalAction: ["Так,пізніше куплю!", "Ні,дякую!"],
    modalOk: () => {
      const newArr = JSON.parse(localStorage.getItem("favProducts")) || [];
      if (newArr.find((el) => el.name === elem.name)) {
        alert("цей продукт вже додано до улюбленого!");
        dispatch(setCloseModal());
        removeOverflow();
      } else {
        newArr.push(elem);
        localStorage.setItem("favProducts", JSON.stringify(newArr));
        dispatch(setCloseModal());
        dispatch(getFavProduct());
        removeOverflow();
      }
    },
  };
  return {
    type: MODAL.SET_MODAL,
    payload: data,
  };
}

export function removeItemBask(id, dispatch) {
  setOverflowBody();
  const data = {
    modalHeader: "Підтвердіть Вашу дію.",
    modalText: "Ви хочете видалити товар з кошику?",
    modalAction: ["Так", "Ні, я випадково натиснув(ла)"],
    modalOk: () => {
      const oldArr = JSON.parse(localStorage.getItem("basketProducts")) || [];
      const index = oldArr.findIndex((el) => el.id === id);
      if (index !== -1) {
        const newArr = [...oldArr];
        newArr.splice(index, 1);
        localStorage.setItem("basketProducts", JSON.stringify(newArr));
        dispatch(setCloseModal());
        dispatch(getBasketProduct());
        removeOverflow();
      }
    },
  };
  return {
    type: MODAL.SET_REMOVE_MODAL,
    payload: data,
  };
}
export function removeItemFav(id, dispatch) {
  setOverflowBody();
  const data = {
    modalHeader: "Підтвердіть Вашу дію.",
    modalText: "Ви хочете видалити товар з улюбленого?",
    modalAction: ["Так", "Ні, я випадково натиснув(ла)"],
    modalOk: () => {
      const oldArr = JSON.parse(localStorage.getItem("favProducts")) || [];
      const newArr = oldArr.filter((el) => el.id !== id);
      localStorage.setItem("favProducts", JSON.stringify(newArr));
      dispatch(setCloseModal());
      dispatch(getFavProduct());
      removeOverflow();
    },
  };
  return {
    type: MODAL.SET_REMOVE_MODAL,
    payload: data,
  };
}

export function setCloseModal() {
  removeOverflow();
  return {
    type: MODAL.MODAL_CLOSE,
    payload: false,
  };
}
