import React from 'react';
import './styles.css';
import { Formik, Field, Form } from 'formik';
const Address = () => {

    const onSubmit = (values) => {
        console.log(values);
    }

    const onBlurCep = (ev, setFieldValue, resetForm) => {
        const { value } = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            resetForm({ values: "" });
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`).
            then((response) => response.json()).
            then((data) => {
                setFieldValue('log', data.logradouro);
                setFieldValue('number', data.numero);
                setFieldValue('district', data.bairro);
                setFieldValue('city', data.localidade);
                setFieldValue('state', data.uf);
            }
            );
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

                render={({ values, setFieldValue, resetForm }) => (
                    <Form className="form-adress">
                        <div className="form-group">
                            <label>CEP</label>
                            <Field name="cep" type="text" className="form-control" onBlur={(ev) => onBlurCep(ev, setFieldValue, resetForm)} value={values.cep} />
                        </div>
                        <div className="form-group">
                            <label>Logradouro</label>
                            <Field name="log" type="text" className="form-control" value={values.log} />
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