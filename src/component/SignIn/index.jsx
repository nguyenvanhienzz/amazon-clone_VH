import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from '../FireBase/firebase';
import { LognIn } from '../Slicer/UserSlice';
import './SignIn.css';

const SignIn = () => {
    const CheckItem = useSelector(state => state.basket);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const singIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                dispatch(LognIn({
                    name: auth.user.displayName,
                    email: email,
                    password: password
                }))
            })
            .then(() => {
                setEmail('');
                setPassword('');
                if (CheckItem) {
                    history.push('/')

                }
                else {
                    history.push('/cart')
                }


            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='signin'>
            <div className='signin-main'>
                <img className='signin-logo' onClick={() => history.push('/')} src='https://xanhlo.com/media/wysiwyg/tintuc/9598b485d75c30986078655d68259c62.png' />
                <div className='signin-form'>
                    <h4>Sign-In</h4>
                    <div className='signin-input'>
                        <label className='email'>Email</label><br />
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} /><br />
                        <label className='password'>Password</label><br />
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button onClick={singIn}>Continue</button>
                    <p>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span></p>
                </div>
                <div className='new-account'>
                    <p>New to Amazon?</p>
                    <button onClick={() => history.push('/account')}>Create your Amazon account</button>
                </div>
            </div>

        </div >
    )
};

export default SignIn
