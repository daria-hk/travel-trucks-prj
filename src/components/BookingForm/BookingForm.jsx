import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css"; // Passe den CSS-Pfad an dein Projekt an

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid format!").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string().min(10, "Too Short!").max(500, "Too Long!"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    resetForm();
  };

  return (
    <div className={css.bookingFormContainer}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.bookingForm}>
            <div className={css.formGroup}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.inputField}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errorMessage}
              />
            </div>
            <div className={css.formGroup}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.inputField}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errorMessage}
              />
            </div>
            <div className={css.formGroup}>
              <Field
                type="date"
                name="bookingDate"
                placeholder="Booking date*"
                className={css.inputField}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.errorMessage}
              />
            </div>
            <div className={css.formGroup}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={`${css.inputField} ${css.textareaField}`}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.errorMessage}
              />
            </div>
            <button
              type="submit"
              className={css.submitButton}
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
