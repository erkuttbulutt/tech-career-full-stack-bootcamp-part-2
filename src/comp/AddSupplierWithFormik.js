import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const addSupplierSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  contactName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

//* initialValues: default valueler
function AddSupplierWithFormik() {
  return (
    <>
      <Formik
        validationSchema={addSupplierSchema}
        initialValues={{
          companyName: "",
          contactName: "",
        }}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.companyName && <div>{errors.companyName}</div>}
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field
                id="companyName"
                name="companyName"
                placeholder="Company Name"
              />
            </div>
            {errors.contactName && <div>{errors.contactName}</div>}
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field
                id="contactName"
                name="contactName"
                placeholder="Contact Name"
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddSupplierWithFormik;
