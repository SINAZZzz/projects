import { useReducer } from 'react';
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

  interface State {
    submitting: boolean;
    success: boolean;
    error: string | null;
  }
  
  const initialState: State = {
    submitting: false,
    success: false,
    error: null
  };
  
  interface Action {
    type: string;
    payload?: string;
  }

  const formReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'SUBMITTING':
        return { ...state, submitting: true, success: false, error: null };
      case 'SUCCESS':
        return { ...state, submitting: false, success: true, error: null };
      case 'FAILURE':
        return { ...state, submitting: false, success: false, error: action.payload || 'Submission failed' };
      default:
        return state;
    }
  };

export default function MyForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    dispatch({ type: 'SUBMITTING' });
    setTimeout(() => {
      if (values.email !== '') {
        dispatch({ type: 'SUCCESS' });
      } else {
        dispatch({ type: 'FAILURE' });
      }
      setSubmitting(false);
    }, 1000);
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
            <Field type="text" name="name" />
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
            <button type="submit" disabled={isSubmitting || state.submitting}>
              {state.submitting ? 'Submitting...' : 'Submit'}
            </button>
            {state.success && <div>Form submitted successfully!</div>}
            {state.error && <div>{state.error}</div>}
          </Form>
       )}
        </Formik>
    </>
  )
}
