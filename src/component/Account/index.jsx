import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../FireBase/firebase';
import { IoMdArrowDropright } from 'react-icons/io'
import './Account.css'
import { useDispatch } from 'react-redux';
import { LognIn } from '../Slicer/UserSlice';

const Account = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const register = (e) => {
        e.preventDefault();
        if (password !== repass) {
            return alert('wrong password');
        }
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                auth.user.updateProfile({
                    displayName: name,
                })
            }).then(() => {
                dispatch(LognIn({
                    name: auth.user.displayName,
                    email: email,
                    password: password,
                    repass: repass
                }))
            })
            .then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setRepass('');
                history.push('/');
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='accout'>
            <div className='accout-main'>
                <img className='accout-logo' onClick={() => history.push('/')} src='https://xanhlo.com/media/wysiwyg/tintuc/9598b485d75c30986078655d68259c62.png' />
                <div className='accout-form'>
                    <h4>Create account</h4>
                    <div className='accout-input'>
                        <label>Your name</label><br />
                        <input type='text' value={name} onChange={e => setName(e.target.value)} /><br />
                        <label className='email'>Email</label><br />
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} /><br />
                        <label className='password'>Password</label><br />
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} /><br />
                        <span> Passwords must be at least 6 characters.</span><br />
                        <label className='respass'>Re-enter password</label><br />
                        <input type='password' value={repass} onChange={e => setRepass(e.target.value)} />
                    </div>
                    <button onClick={register}>
                        Create your Amazon account
                    </button>
                    <p>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span></p>
                    <div className='create-accout'>
                        <p >
                            Already have an account? <span onClick={() => history.push('/signin')}>Sign-In<IoMdArrowDropright className='accout-icons' /></span>
                        </p>
                        <p >Buying for work? <span>Create a free business account<IoMdArrowDropright className='accout-icons' /></span> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Account
