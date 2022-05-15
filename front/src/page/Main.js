import React, {useState} from 'react';
import axios from "axios";

const Main = () => {
    const [registerInfo, setRegisterInfo] = useState();
    const [loginInfo, setLoginInfo] = useState();

    const register = () => {
        axios.post('http://localhost/8080/use/register',{data : registerInfo} ,null, null);
    }

    const login = () => {
    }

    return (
        <>
            <div>
                <p> 회원 가입</p>
                <input placeholder={'이름으로 가입'} value={registerInfo} onChange={(e) => setRegisterInfo(e.target.value)}/>
                <button onClick={register}> 가입 </button>
            </div>
            <div>
                <p> 로그인</p>
                <input placeholder={'이름 입력'} value={loginInfo} onChange={(e) => setLoginInfo(e.target.value)}/>
                <button onClick={login}> 로그인 </button>
            </div>
        </>
    )
}

export default Main