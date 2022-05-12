
import './App.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import MailForm from './components/MailForm';

function App() {
  const ErrorSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    title:Yup.string().required("Required"),
    message:Yup.string().required("Required").min(5, "Too Short"),
    file:Yup.string().required("Required")
  })
  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Mail form</h1>
          <Formik
            initialValues={{
              email: "",
              title: "",
              message: "",
              file:""
            }}
            onSubmit={(value, {resetForm}) => {
              console.log(value);
              resetForm();
              alert('Sent successfully!!!')
            }}
            validationSchema={ErrorSchema}
            component={MailForm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
