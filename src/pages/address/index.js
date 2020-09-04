import React from 'react';
import './styles.css';
import { Formik, Field, Form } from 'formik';
import api from '../../services/api';
const Address = () => {

    const onSubmit = (values) => {
        console.log(values);
    }

    const onBlurCep = async (ev, setFieldValue, resetForm) => {
        const { value } = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            resetForm({ values: "" });
            return;
        }

        const response = await api.get(`${cep}/json/`);
        const { data } = response;

        setFieldValue("bairro", data.bairro);
        setFieldValue("localidade", data.localidade);
        setFieldValue("uf", data.uf);
        setFieldValue("logradouro", data.logradouro);        
    }
    return (
        <div>
            <Formik
                onSubmit={onSubmit}
                initialValues={{
                    cep: "",
                    logradouro: "",
                    bairro: "",
                    localidade: "",
                    uf: "",
                }}

                render={({ values, setFieldValue, resetForm }) => (
                    <Form className="form-adress">
                        <div className="form-group">
                            <label>CEP</label>
                            <Field name="cep" type="text" className="form-control" onBlur={(ev) => onBlurCep(ev, setFieldValue, resetForm)} value={values.cep} />
                        </div>
                        <div className="form-group">
                            <label>Logradouro</label>
                            <Field name="logradouro" type="text" className="form-control" value={values.logradouro} />
                        </div>
                        <div className="form-group">
                            <label>Bairro</label>
                            <Field name="bairro" type="text" className="form-control" value={values.bairro} />
                        </div>
                        <div className="form-group">
                            <label>Cidade</label>
                            <Field name="localidade" type="text" className="form-control" value={values.localidade} />
                        </div>
                        <div className="form-group">
                            <label>Estado</label>
                            <Field name="uf" type="text" className="form-control" value={values.uf} />
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