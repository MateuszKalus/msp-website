import React, {useState} from 'react'
import {graphql} from 'gatsby'
import axios from "axios";

import '../templates/job-page.css'
import MainLayoult from "../templates/main-layoult";

import {Formik} from "formik";


import styled from 'styled-components'


const StyledLabel = styled.label`
outline-color: #ff6200;

    display: block;
    margin-bottom: 10px;
`;

const StyledSelect = styled.select`
outline-color: #ff6200;
    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid black;
    height: auto;
    width: 300px;
    max-width: 80%;
`

const StyledInput = styled.input`
    outline-color: #ff6200;
    display: block;
    border: 1px solid black;
    background: none;
    padding: 5px;
    height: ${({as}) => as ? '200px' : 'auto'};
    width: ${({as}) => as ? '500px' : '300px'};
    max-width: 80%;
    margin-bottom: 25px;
    
`;

const Alert = styled.div`
    display: ${({displayAlert}) => displayAlert ? 'inline-block' : 'none'};
`

const Button = styled.button`
outline-color: #ff6200;
    disabled: ${({disabled}) => disabled ? 'disabled' : 'false'};
    background-color: #ff6200;
    padding: 10px 15px;
    border: none;
    color: white;
    outline: none;
    
    &:hover {
        background-color: orange;
    }
    
    &:active {
        transform: translateY(2px);

    }   
`;


const KontaktPage = ({data: {info}, location}) => {

    let [displayAlert, setDisplayAlert] = useState(false);
    let [alertMessage, setAlertMessage] = useState('Wysłano wiadomość');

    return (

        <MainLayoult location={location} crumbLabel={'Kontakt'}>
            <div className={'silly-content-wrapper markdown-content'}>

                <Formik
                    initialValues={{name: '', email: '', kierunek: '', message: ''}}

                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        const headers = {
                            'Content-Type': 'application/json',
                            "X-Parse-Application-Id": process.env.X_PARSE_ID,
                            "X-Parse-REST-API-Key": process.env.X_PARSE_API_KEY
                        };

                        axios.post('https://parseapi.back4app.com/functions/hello', values, {
                            headers: headers
                        })
                            .then((response) => {
                                console.log(response)
                                setSubmitting(false)

                                setAlertMessage('Wiadomość została wysłana!')
                                setDisplayAlert(true);

                                resetForm();

                            })
                            .catch((error) => {
                                console.log(error)
                                setSubmitting(false)

                                setAlertMessage('Wystąpił nieoczekiwany błąd.')
                                setDisplayAlert(true);
                            })

                        setTimeout(()=>{
                            setDisplayAlert(false);
                        }, 5000)


                    }}
                >
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                          /* and other goodies */
                      }) => (


                        <form onSubmit={handleSubmit} className={'center-form'} id={'contact-form'}>
                            <StyledLabel htmlFor={"name"}>Imię:</StyledLabel>
                            <StyledInput type={'text'}
                                         name={'name'}
                                         id={'name'}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.name}
                            />

                            <StyledLabel htmlFor={"e-mail"}>E-mail:</StyledLabel>
                            <StyledInput required
                                         type={'e-mail'}
                                         name={'email'}
                                         id={'email'}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.email}
                            />

                            <StyledLabel htmlFor={"kierunek"}>Którego kierunku dotyczy pytanie?</StyledLabel>
                            <StyledSelect name={'kierunek'} id={"kierunek"} required
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.kierunek}
                            >
                                <option value="" selected disabled hidden>-- wybierz kierunek --</option>
                                <option value="Pytanie ogólne">Pytanie ogólne</option>
                                {info.edges.map(({node}) => {
                                    return <option value={node.nazwaKierunku}>{node.nazwaKierunku}</option>
                                })}

                            </StyledSelect>

                            <StyledLabel htmlFor={"message"}>Wiadomość:</StyledLabel>
                            <StyledInput required
                                         as="textarea"
                                         type={'text'}
                                         name={'message'}
                                         id={'message'}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.message}
                            />

                            <Button disabled={displayAlert}>Wyślij</Button>
                            <Alert displayAlert={displayAlert}> {alertMessage} </Alert>

                        </form>
                    )}
                </Formik>


            </div>
        </MainLayoult>
    )
};

export const query = graphql`
query FetchJobsToShow {
    info: allDatoCmsKierunki(sort: {order: ASC, fields: nazwaKierunku}) {
        edges {
            node {
                nazwaKierunku
            }
        }
    }  
}
`


export default KontaktPage;

