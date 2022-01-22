import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';


export default function Create() {
    const name = localStorage.getItem("name");
    let history = useHistory();
    const [content, setContent] = useState('');

    const postData = () => {
        if(content.length > 2){
            axios.post(`https://61c49fe3f1af4a0017d996dd.mockapi.io/todos`, {
                content
            }).then(() => {
                history.push('/read')
            })
        }
        else{
            alert('3 Karakterden fazla giriniz');
        }
    }
    return (
        <div>
            <h1>Hoşgeldin : {name}</h1>
            <h2>Todo Ekle</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>Todo</label>
                    <input minLength='3' placeholder='Todo' onChange={(e) => setContent(e.target.value)}/>
                </Form.Field>
               
                <Button onClick={postData} type='submit'>Ekle</Button>
            </Form>
        </div>
    )
}
