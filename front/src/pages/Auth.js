import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router";


const Auth = () => {
    const navigate = useNavigate();
    const [registerIdInfo, setRegisterIdInfo] = useState('');
    const [registerPwdInfo, setRegisterPwdInfo] = useState('');
    const [registerNickInfo, setRegisterNickInfo] = useState('');

    const [loginIdInfo, setLoginIdInfo] = useState('');
    const [loginPwdInfo, setLoginPwdInfo] = useState('');
    const [loginNickInfo, setLoginNickInfo] = useState('');

    const register = async() => {
        axios.post('/users/register',{data:{
                id: registerIdInfo,
                pwd: registerPwdInfo,
                nick: registerNickInfo
            }}).then(() => {
            setRegisterIdInfo('');
            setRegisterPwdInfo('');
            setRegisterNickInfo('');
        })

        navigate('/main');
    }

    const login = async() => {
        axios.post('/users/login', {data: {
                id: loginIdInfo,
                pwd: loginPwdInfo
            }}).then(() => {
            setLoginIdInfo('');
            setLoginPwdInfo('');
            setLoginPwdInfo('');
        })
    }

    return(
        <div>
            <div>
                <p> 회원 가입</p>
                <input placeholder={'id 입력'} onChange={(e) => setRegisterIdInfo(e.target.value)}/>
                <br/>
                <input placeholder={'password 입력'} onChange={(e) => setRegisterPwdInfo(e.target.value)}/>
                <br/>
                <input placeholder={'nickname 입력'} onChange={(e) => setRegisterNickInfo(e.target.value)}/>
                <br/>
                <button onClick={register}>회원가입</button>
            </div>
            <div>
                <p>로그인</p>
                <input placeholder={'id 입력'} onChange={(e) => setLoginIdInfo(e.target.value)}/>
                <br/>
                <input placeholder={'password 입력'} onChange={(e) => setLoginPwdInfo(e.target.value)}/>
                <br/>
                <button onClick={login}>로그인</button>
            </div>
        </div>
    )
}

export default Auth