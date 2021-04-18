import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { serachById } from '../../store/action';
import { Form, Button, Table } from 'react-bootstrap';

const Serach = props => {
    const [formState, setFormState] = useState({
        id: ''
    });

    const updateState = e => {
        e.preventDefault()
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const filterById = e => {
        e.preventDefault();
        props.serach(formState);
    }

    return (
        <Fragment>
            <div className={'input'}>
                <Form.Control type="text" 
                    onChange={updateState} 
                    value={formState.id} 
                    placeholder="Serach By ID" 
                    name={'id'}/>
                <Button onClick={(e) => filterById(e)}>Serach</Button>
            </div>
            {props.repository ? (
                <Table className={'serach-field'}>
                    <tbody>
                        <tr>
                            <th>{props.repository[0].Id}</th>
                            <th>{props.repository[0].NameHE}</th>
                            <th>{props.repository[0].NameEN}</th>
                            <th>{props.repository[0].AdId}</th>
                            <th>{props.repository[0].Country}</th>
                            <th>{props.repository[0].IsActive.toString()}</th>
                        </tr>
                    </tbody>
                </Table>
            ) : <p>{props.error}</p>}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        repository: state.repository,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        serach: data => dispatch(serachById(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Serach);