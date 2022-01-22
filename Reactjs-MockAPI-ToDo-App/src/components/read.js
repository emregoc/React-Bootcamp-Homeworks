import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const name = localStorage.getItem("name");
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://61c49fe3f1af4a0017d996dd.mockapi.io/todos`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, content } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('content', content);
    }

    const getData = () => {
        axios.get(`https://61c49fe3f1af4a0017d996dd.mockapi.io/todos`)
            .then((getData) => {
                setAPIData(getData.data);
                //console.log(getData);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://61c49fe3f1af4a0017d996dd.mockapi.io/todos/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <h1>Hoşgeldin : {name}</h1>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>ToDo Content</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.content}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
