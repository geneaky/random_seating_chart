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

    const [nick, setNick] = useState('');

    const register = async() => {
        await axios.post('/users/register',{data:{
                id: registerIdInfo,
                pwd: registerPwdInfo,
                nick: registerNickInfo
            }});
    }

    const login = async() => {
        await axios.post('/users/login', {data: {
                id: loginIdInfo,
                pwd: loginPwdInfo
            }}).then((res) => {
                if(res.status == 200) {
                setLoginIdInfo('');
                setLoginPwdInfo('');
                setLoginPwdInfo('');
                setNick(res.data[0].nick);
                localStorage.setItem('id', loginIdInfo);
                localStorage.setItem('pwd', loginPwdInfo);
                } else{
                    return;
                }
        })
    }

    const changeNick = async () => {
        await axios.put('/users/nick', {
            data: {
                id: localStorage.getItem('id'),
                pwd: localStorage.getItem('pwd'),
                nick: nick
            }
        });
    }

    return(
        <div>
            { nick?
                <div>
                    <p> {nick} 님 어서오세요</p>
                    <input placeholder={'nickname 변경'} onChange={(e) => setNick(e.target.value)}/>
                    <button onClick={changeNick}>변경</button>
                    <br/>
                    <button onClick={() => {navigate('/main')}}>자리뽑기 시작</button>
                </div> :
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
            }
        </div>
    )
}

export default Auth