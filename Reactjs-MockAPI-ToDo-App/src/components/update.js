import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    const name = localStorage.getItem("name");
    let history = useHistory();
    const [id, setID] = useState(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setContent(localStorage.getItem('content'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://61c49fe3f1af4a0017d996dd.mockapi.io/todos/${id}`, {
            content,
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <h1>Hoşgeldin : {name}</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={content} onChange={(e) => setContent(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
