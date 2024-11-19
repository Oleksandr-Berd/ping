

import { ErrorMessage, Field, Formik, Form } from "formik";

import * as SC from "./HeroStyled"

import { validSchema } from "../../utils/validSchema";
import { IProps } from "../../utils/interfaces";

const HeroForm: React.FC<IProps> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);

        handleSubmit(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form noValidate>
          <SC.InputCon>
            <Field
              type="email"
              name="email"
              placeholder="example@mail.com"
              style={{
                borderColor:
                  touched.email && errors.email ? "#FF5466" : "#C2D3FF",
              }}
            />
            <ErrorMessage name="email">
              {(msg) => (msg ? <p>{msg}</p> : null)}
            </ErrorMessage>
          </SC.InputCon>
          <SC.SubmitButton type="submit" disabled={isSubmitting}>
            Notify Me
          </SC.SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default HeroForm;
