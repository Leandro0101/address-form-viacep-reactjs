import React from 'react';
import './styles.css';
import { Formik, Field, Form } from 'formik';
const Address = () => {
    return (
        <div>
            <form className="form-adress">
                <div className="form-group">
                    <label>CEP</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Logradouro</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Número</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Bairro</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Cidade</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Estado</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Address;