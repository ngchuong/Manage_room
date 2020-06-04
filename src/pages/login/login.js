import React from 'react';
import './login.scss';

import Input from '../../components/core/input/input';
import Button from '../../components/core/button/button';

import Logo from '../../asset/image/userLogin.png';

function Login() {

    const onLogin = () => {
        const isLogin = localStorage.getItem("user");
        if (isLogin) {
            
        }

        window.location.href = "http://localhost:3000/user";
    }
    return (
        <div className="container-login">
            <div className="form-login">
                <div className="header-login">
                    <div>
                        <img className="img" src={Logo} alt={"logo-website"} />
                    </div>
                    <div>
                        LOGIN
                    </div>
                </div>
                <div className="body-login">
                    <div>
                        <Input cls={'input-login'} placeholder={'User'} type={'text'} />
                    </div>
                    <div>
                        <Input cls={'input-login'} placeholder={'Password'} type={'password'} />
                    </div>
                </div>
                <div className="footer-login">
                    <Button
                        cls={'btn-login'}
                        title={'Sign in'}
                        handleClick={onLogin} />
                    {/* <Button cls={'btn-cancel'} title={'Register'} /> */}
                </div>
            </div>
        </div>
    )
}

export default Login;
