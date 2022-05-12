import React from 'react';
import { Form, Field } from 'formik';


function MailForm({errors, touched}){

    return (
        <Form>
            <div className="form-group">
                <label className="col-form-label">
                    To:
                </label>
                <Field name='email' className={touched.email ? `form-control ${errors.email ? "invalid" : "valid"}` : `form-control`} type='text' />
                {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
            </div>
            <div className="form-group">
                <label className="col-form-label">
                    Title:
                </label>
                <Field name='title' className={touched.title ? `form-control ${errors.title ? "invalid" : "valid"}` : `form-control`} type='text' />
                {touched.title && errors.title && <small className="text-danger">{errors.title}</small>}
            </div>
            <div className="form-group">
                <label className="col-form-label">
                    Message:
                </label>
                <Field as='textarea' name='message' className={touched.message ? `form-control ${errors.message ? "invalid" : "valid"}` : `form-control`}></Field>
                {touched.message && errors.message && <small className="text-danger">{errors.message}</small>}
            </div>
            <div className="form-group">
                <label className="col-form-label">
                    File Upload:
                </label>
                <Field name='file' className={touched.file ? `form-control ${errors.file ? "invalid" : "valid"}` : `form-control`} type='file' />
                {touched.file && errors.file && <small className="text-danger">{errors.file}</small>}
            </div>
            <button type="submit" className="btn btn-primary my-3">Submit</button>
        </Form>
    )
}

export default MailForm