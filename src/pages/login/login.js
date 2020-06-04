import React from 'react';
import './login.scss';

import Input from '../../components/core/input/input';
import Button from '../../components/core/button/button';

function Login() {
    return (
        <div className="container-login">
            <div className="form-login">
                <div className="header-login">
                    LOGIN
                </div>
                <div className="body-login">
                    <div>
                        <Input cls={'input-login'} placeholder={'user'} />
                    </div>
                    <div>
                        <Input cls={'input-login'} placeholder={'password'} />
                    </div>
                </div>
                <div className="footer-login">
                    <Button cls={'btn-login'} title={'Sign in'} />
                    {/* <Button cls={'btn-cancel'} title={'Register'} /> */}
                </div>
            </div>
        </div>
    )
}

export default Login;
