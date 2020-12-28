import React from 'react'
import {graphql} from 'gatsby'
import axios from "axios";

import '../templates/job-page.css'
import MainLayoult from "../templates/main-layoult";

import {Formik} from "formik";

import styled from 'styled-components'

const StyledLabel = styled.label`
    display: block;
`;

const StyledSelect = styled.select`
    margin-bottom: 15px;
    border: 1px solid black;
`

const StyledInput = styled.input`
    display: block;
    border: 1px solid black;
    background: none;
    height: ${({as}) => as ? '200px' : 'auto'};
    width: ${({as}) => as ? '500px' : '300px'};
    max-width: 80%;
    margin-bottom: 15px;
    
`;

const Button = styled.button`
    background-color: orange;
    padding: 5px 10px;
    
`;

const KontaktPage = ({data: {info}, location}) => {


    return (
        <MainLayoult location={location} crumbLabel={'Kursy i szkolenia'}>
            <div className={'silly-content-wrapper markdown-content'}>

                <Formik
                    initialValues={{name: '', email: '', kierunek: '', message: ''}}

                    onSubmit={(values, {setSubmitting}) => {
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
                            })
                            .catch((error) => {
                                console.log(error)
                                setSubmitting(false)
                            })
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
                        <form onSubmit={handleSubmit} className={'center-form'}>
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

                            <Button disabled={isSubmitting}>Wyślij</Button>
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

