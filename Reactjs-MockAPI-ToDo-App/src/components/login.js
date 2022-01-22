import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Login() {
    let history = useHistory();
    const [name, setName] = useState('');
    const userName = () => {
        localStorage.setItem('name', name);
        history.push('/read');
    }
    return (
        <div>
            <h1>Hoşgeldiniz </h1>
            <Form className="create-form">
                <Form.Field>
                    <label>Lütfen İsim Girin</label>
                    <input placeholder='İsim' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
            
                <Button type='submit' onClick={userName}>Giriş Yap</Button>
            </Form>
        </div>
    )
}
