import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '' , email: '' , password: ''
  };

  interface FormValues {
    name: string;
    email: string;
    password: string;
  }

export default function MyForm() {
  const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number'
    ),
  });

  return (
    <>
        <h1>Form</h1>
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
          
    {({ isSubmitting }) => (
         <Form>
          <label htmlFor="name">name</label>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
          <br />
          <label htmlFor="email">email</label>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
          <br />
          <label htmlFor="password">password</label>
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
          <br />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
        </Formik>
    </>
  )
}
