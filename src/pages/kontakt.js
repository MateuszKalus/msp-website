import React, {useState} from 'react'
import {graphql} from 'gatsby'
import axios from "axios";

import MainLayoult from "../templates/main-layoult";

import {Formik} from "formik";


import styled from 'styled-components'


if (localStorage.getItem('contrast')==='true') {
    require('../templates/job-page.css');
    require('../templates/contrast.css');
} else {
    require('../templates/job-page.css');

}

const StyledLabel = styled.label`
outline-color: #ff6200;

    display: block;
    margin-bottom: 10px;
`;

const StyledSelect = styled.select`
    
    outline: none;
    -webkit-appearance:none;

    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid black;
    border-radius: 6px;
    height: auto;
    width: 300px;
    max-width: 80%;
    
    -webkit-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    0px 0px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         0px 0px 5px 0px rgba(50, 50, 50, 0.75);
`;

const StyledInput = styled.input`
    outline: none;
    outline-color: #ff6200;
    display: block;
    border: 1px solid black;
    border-radius: 6px;
    background: none;
    padding: 5px;
    height: ${({as}) => as ? '200px' : 'auto'};
    width: ${({as}) => as ? '500px' : '300px'};
    max-width: 80%;
    margin-bottom: 25px;
    
    &:focus {
        border-color: orange;   
        -webkit-box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.75);
        -moz-box-shadow:    0px 0px 4px 0px rgba(50, 50, 50, 0.75);
        box-shadow:         0px 0px 4px 0px rgba(50, 50, 50, 0.75);
 
    }
    
`;

const StyledRadio = styled.input`
    outline-color: #ff6200;
    margin: 0px;
    display: inline-block;
    background: none;
    padding: 5px;
    margin-left: 10px;
    margin-right: 25px;
    margin-bottom: 25px;
    visibility: visible;
    display: none;
    
    
`;

const StyledRadioLabel = styled.label`
    position: relative;
    
    &:before {
       content: '';
       display: inline-block;
       border: 2px solid black;
       border-radius: 50%;
       width: 14px;
       height: 14px;
       position: absolute;
       right: -20px;
       top: 50%;
       box-sizing: border-box;
       transform: translateY(-50%) translateX(50%);
       padding:4px;
       
       background-color: transparent;
       }
       
    &:after {
       content: '';
       display: inline-block;
       border: 2px solid white;
       border-radius: 50%;
       width: 10px;
       height: 10px;
       position: absolute;
       right: -20px;
       top: 50%;
       box-sizing: border-box;
       transform: translateY(-50%) translateX(50%);
       padding:4px;
       
       background-color: transparent;
       
       
       }
    
       
`;

const Alert = styled.div`
    display: ${({displayAlert}) => displayAlert ? 'inline-block' : 'none'};
    margin-left: 10px;
`;

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

const StyledDivForCustomRadio = styled.div`
    display: inline-block;
    margin-right: 50px;
    margin-bottom: 25px;

    & input:checked ~ label:before {
        background-color: #ff6200;
        
        -webkit-box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.75);
        -moz-box-shadow:    0px 0px 4px 0px rgba(50, 50, 50, 0.75);
        box-shadow:         0px 0px 4px 0px rgba(50, 50, 50, 0.75);
    }
`;



const KontaktPage = ({data: {info}, data, location, pageContext}) => {


    console.log(data.nazwa.edges[0].node.duzyGornyTekst);
    const startAlertAnimation = () => {
        const alertDiv = document.querySelector('.alert-sent');
        if (alertDiv) {
            alertDiv.classList.add('alert-sent--active');
        }
    };

    const stopAlertAnimation = () => {
        const alertDiv = document.querySelector('.alert-sent');
        if (alertDiv) {
            alertDiv.classList.remove('alert-sent--active');
        }
    };

    const {
        breadcrumb: {crumbs},
    } = pageContext;

    let [displayAlert, setDisplayAlert] = useState(false);
    let [alertMessage, setAlertMessage] = useState('Wysłano wiadomość');

    return (

        <MainLayoult location={location} crumbLabel={'Kontakt'} crumbs={crumbs}>
            <div className={'alert-sent'}>Wiadomość została wysłana</div>
            <div className={'silly-content-wrapper markdown-content'}>

                <Formik
                    initialValues={{name: '', email: '', kierunek: '', message: '', phone: '', contactway: ''}}

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
                                console.log(response);
                                setSubmitting(false);

                                setAlertMessage('Wiadomość została wysłana!');
                                startAlertAnimation();
                                setDisplayAlert(true);

                                resetForm();

                            })
                            .catch((error) => {
                                console.log(error);
                                setSubmitting(false);

                                setAlertMessage('Wystąpił nieoczekiwany błąd.');
                                setDisplayAlert(true);
                            });

                        setTimeout(() => {
                            stopAlertAnimation();
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

                            <StyledLabel htmlFor={"email"}>E-mail:</StyledLabel>
                            <StyledInput required
                                         type={'email'}
                                         name={'email'}
                                         id={'email'}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.email}
                                         pattern={"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"}
                            />

                            <StyledLabel htmlFor={"phone"}>Telefon:</StyledLabel>
                            <StyledInput required
                                         type={'tel'}
                                         name={'phone'}
                                         id={'phone'}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.phone}
                                         pattern="^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$"
                            />

                            <StyledLabel htmlFor={"contactway"}>Preferowana forma kontaktu:</StyledLabel>

                            <StyledDivForCustomRadio>
                                <StyledRadio
                                    type={'radio'}
                                    name={'contactway'}
                                    id={'contactway--phone'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={'telefoniczna'}
                                />
                                <StyledRadioLabel htmlFor="contactway--phone">telefoniczna</StyledRadioLabel>
                            </StyledDivForCustomRadio>

                            <StyledDivForCustomRadio>
                                <StyledRadio
                                    type={'radio'}
                                    name={'contactway'}
                                    id={'contactway--email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={'e-mailowa'}
                                />
                                <StyledRadioLabel htmlFor="contactway--email">e-mailowa</StyledRadioLabel>
                            </StyledDivForCustomRadio>


                            <StyledLabel htmlFor={"kierunek"}>Którego kierunku dotyczy pytanie?</StyledLabel>
                            <StyledSelect name={'kierunek'} id={"kierunek"} required
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.kierunek}
                            >
                                <option value="" selected disabled hidden>-- wybierz kierunek --</option>
                                <option value="Pytanie ogólne">Pytanie ogólne</option>
                                {info.edges.map(({node}) => {
                                    return <option value={node.nazwaKierunku}
                                                   key={node.nazwaKierunku}>{node.nazwaKierunku}</option>
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
        },
        nazwa: allDatoCmsNazwaSzkolyWNaglowku {
            edges {
                node {
                    duzyGornyTekst
                    malyDolnyTekst
                }
            }
        }
    }
`;


export default KontaktPage;

