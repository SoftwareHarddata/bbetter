import React, { Component, useState } from 'react'
import styled from 'styled-components/macro'
import {loginUser, singUpUser} from '../services/loginService'
import {useForm} from "react-hook-form";
import {Link, NavLink, Redirect} from 'react-router-dom';
import {getLoggedUser, loggedUser} from "../services/userService";
import CircularIndeterminate from "./CircularIndeterminate";
import {Toolbar} from "@material-ui/core";


export default function LoginComponent({setToken, token}) {
    //const [userName, setUserName] = useState('')
    //const [userPassword, setUserPassword] = useState('')
    //const [email, setUserEmail] = useState('')

    const { register, errors, handleSubmit } = useForm();
    //const initialFormState = { userName:'', userPassword: '' }
    const [singUpData, setSingUpData] = useState([])
    const [conflictError, setConflictError] = useState('')
    const [isOnsubmit, setIsOnsubmit] = useState(false)




    const onSubmit = (data, e) =>{
        setIsOnsubmit(false)
        console.log(data);
        console.log(data.userName)
        setSingUpData([
            ...singUpData, data
        ])
        e.preventDefault()

        if (!data.userName && !data.userPassword) {
            return
        }
        loginUser(data.userName, data.userPassword).then(
            setToken

            ).catch((error) => {
                setSingUpData([]);
                setConflictError("username oder password stimmen nicht überein")
            }
        )

        // clean fields
        e.target.reset();
        setIsOnsubmit(true)
    }

    if (token) {
        console.log("token")
        console.log("singUpData ...")
        console.log("singUpData[0][\"userName\"] "+singUpData[0]["userName"])
        return <Redirect to={`/${singUpData[0]["userName"]}`}/>
    }

    //todo: fix it
    /*if (!token && isOnsubmit) {
        console.log("waiting")
        return <WaitingStyle> <CircularIndeterminate/> <p color='#000000'>Loading!!!</p> <CircularIndeterminate/> </WaitingStyle>
    }*/

    return (
        <>
            <Logo>2bbetter</Logo>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Username"
                    type="text"
                    name="userName"
                    value={singUpData.userName}
                    ref={register({
                        required: {
                            value: true,
                            message: 'Please insert your username'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Username too long. Max 20 letters'
                        },
                        minLength: {
                            value: 2,
                            message: 'Username not valid. Min 2 letters'
                        }
                    })}
                />

                {
                    errors.userName && <ErrorMessage >{errors.userName.message}</ErrorMessage>
                }

                <input
                    placeholder="Password"
                    type="password"
                    name="userPassword"
                    value={singUpData.userPassword}
                    ref={register({
                        required: {
                            value: true,
                            message: 'Please insert your password'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Password too long. Max 20 letters'
                        },
                        minLength: {
                            value: 2,
                            message: 'Password not valid. Min 2 letters'
                        }
                    })}
                />

                {
                    errors.userPassword && <ErrorMessage >{errors.userPassword.message}</ErrorMessage>
                }


                <button type="submit">Login</button>

                {
                    conflictError &&
                    <>
                        <ErrorMessage >{conflictError}</ErrorMessage>
                        <br/>
                        <ErrorMessage> please try again or <Link to="/user/singup">SignUp</Link></ErrorMessage>
                    </>
                }

                <button> <NavLink to="/user/singup" >SignUp</NavLink>  </button>
                <br/>
                <ErrorMessage> or try: <br/> username=user <br/> password=user </ErrorMessage>

            </Form>
        </>
    )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  input {
    flex-grow: 1;
    text-align: center;
    margin: 8px;
  }
  button {
    padding: 8px;
    margin: 8px;
    color: white;
    background-color: #1D253B ;
    font-family: 'Al Nile';
    border-radius: 20px;
  }
`


const ErrorMessage = styled.span`
  padding: 0.5em;
  margin: 0.5em;
  color: #470f1a;
  //background: darkgrey;
  border: none;
  border-radius: 3px;
  font-size: medium;
`

const WaitingStyle = styled.section`
  width: 100%;
  height: 100%;
  background: white;
`

const Logo = styled.section`
  display: flex;
  justify-content: center;
  font-family: Frutiger Serif;
  align-self: center;
  color: darkgrey;
  margin: 20px;
`
;