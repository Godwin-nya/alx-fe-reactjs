import { Formik, form, field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {
  const initialValues = { username: "", email: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("name is required"),

    email: Yup.string()
      .email("invalid email format")
      .required("email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    alert("Form submitted successfully!");
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Username</label>
          <Field type="text" name="username" />
          <ErrorMessage
            name="username"
            component="p"
            style={{ color: "red" }}
          />
        </div>

        <div>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />
        </div>

        <div>
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="p"
            style={{ color: "red" }}
          />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
