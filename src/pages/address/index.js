import React from 'react';
import './styles.css';
import { Formik, Field, Form } from 'formik';
const Address = () => {

    const onSubmit = (values) => {
        console.log(values);
    }


    return (
        <div>
            <Formik
                onSubmit={onSubmit}
                initialValues={{
                    cep: "",
                    log: "",
                    number: "",
                    district: "",
                    city: "",
                    state: "",
                }}

                render={({ values }) => (
                    <Form className="form-adress">
                        <div className="form-group">
                            <label>CEP</label>
                            <Field name="cep" type="text" className="form-control" value={values.cep} />
                        </div>
                        <div className="form-group">
                            <label>Logradouro</label>
                            <Field name="log" type="text" className="form-control" value={values.log} />
                        </div>
                        <div className="form-group">
                            <label>Número</label>
                            <Field name="number" type="text" className="form-control" value={values.number} />
                        </div>
                        <div className="form-group">
                            <label>Bairro</label>
                            <Field name="district" type="text" className="form-control" value={values.district} />
                        </div>
                        <div className="form-group">
                            <label>Cidade</label>
                            <Field name="city" type="text" className="form-control" value={values.city} />
                        </div>
                        <div className="form-group">
                            <label>Estado</label>
                            <Field name="state" type="text" className="form-control" value={values.state} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn">Enviar</button>
                        </div>
                    </Form>
                )}
            />

        </div>
    )
}

export default Address;