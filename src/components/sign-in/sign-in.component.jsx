import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'
class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (e) {
            console.log(e)
        }

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type='email' handleChange={this.handleChange} value={this.state.email} label='email' required />
                    <FormInput name="password" type='password' handleChange={this.handleChange} value={this.state.password} label='password' required />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} type="submit" isGoogleSignIn > Sign in with Google </CustomButton>
                    </div>
                </form>
            </div >
        )
    }
}

export default SignIn