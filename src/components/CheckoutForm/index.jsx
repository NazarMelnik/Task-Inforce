import { useFormik } from "formik";
import * as Yup from "yup";
import { PatternFormat } from "react-number-format";
import { buyProductModal } from "../../redux/actions/modal";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Ім'я дуже коротке!")
    .max(20, "Не буває таких імен!")
    .required("Обов'язкове поле!"),
  lastName: Yup.string()
    .min(2, "Прізвище дуже коротке!")
    .max(20, "Не буває таких прізвищ!")
    .required("Обов'язкове поле!"),

  phone: Yup.string()
    .test(
      "valid-format",
      "Не всі символи маски були заповнені!",
      (value) => value.indexOf("#") === -1
    )
    .required("Обов'язкове поле!"),
  age: Yup.number()
    .test("two-digits", "Вік повинен бути двохзначним числом!", (value) =>
      /^[0-9]{2}$/.test(value)
    )
    .required("Обов'язкове поле!"),
  size: Yup.string()
    .matches(/\b(?:L|M|XL|S|XS|XXL)\b/, "Не вірний розмір!")
    .required("Обов'язкове поле!"),
});

export function CheckoutForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      phone: "",
      size: "",
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      dispatch(buyProductModal(formik, dispatch));
    },
  });
  return (
    <>
      <form className="checkout-form" onSubmit={formik.handleSubmit}>
        <TextField
          className="checkout-input"
          type="text"
          name="name"
          id="name"
          label="Ваше ім'я"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={!!formik.errors.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <TextField
          className="checkout-input"
          type="text"
          name="lastName"
          id="lastName"
          onChange={formik.handleChange}
          label="Ваше прізвище"
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={!!formik.errors.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <TextField
          label="Ваш вік"
          className="checkout-input"
          type="text"
          name="age"
          id="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.age}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}
        <TextField
          className="checkout-input"
          type="text"
          label="Бажаний розмір(XL,L,S,M,XXL)"
          name="size"
          error={!!formik.errors.size}
          id="size"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.size}
        />
        {formik.touched.size && formik.errors.size ? (
          <div>{formik.errors.size}</div>
        ) : null}
        <PatternFormat
          className="checkout-input"
          format="+380 (##) #### ###"
          allowEmptyFormatting
          mask="#"
          error={!!formik.errors.phone}
          type="text"
          name="phone"
          id="phone"
          onChange={formik.handleChange}
          placeholder="Ваш номер телефону"
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
        <Button
          type="submit"
          variant="contained"
          onSubmit={formik.handleSubmit}>
          Замовити
        </Button>
      </form>
    </>
  );
}
