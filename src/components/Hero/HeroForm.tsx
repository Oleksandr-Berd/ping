import { ErrorMessage, Field, Formik, Form } from "formik";
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
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="email" name="email" />
            <ErrorMessage name="email">
              {(msg) => (msg ? <p>{msg}</p> : null)}
            </ErrorMessage>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Notify Me
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default HeroForm;
