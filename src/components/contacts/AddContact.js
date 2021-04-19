import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import { v4 as uuid } from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors:{},
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if(name===''){
            this.setState({errors:{name:'Name is required'}});
            return;
        }
        if(email===''){
            this.setState({errors:{email:'email is required'}});
            return;
        }
        if(phone===''){
            this.setState({errors:{phone:'phone is required'}});
            return;
        }

        const newContact = {
            id: uuid(),
            name, email, phone
        }
        dispatch({ type: 'ADD_CONTACT', payload: newContact })
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors:{},
        })

    }
    render() {
        const { name, email, phone,errors } = this.state;
        return (<Consumer>
            {value => {
                const { dispatch } = value;
                return (
                    <div className="card mb-3">
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup label="Name" name="name" placeholder="Enter Name" value={name} onChange={this.onChange} errors={errors.name} />
                                <TextInputGroup label="Email" name="email" type="email" placeholder="Enter Email..." value={email} onChange={this.onChange} errors={errors.email}/>
                                <TextInputGroup label="phone" name="phone" placeholder="Enter phone" value={phone} onChange={this.onChange} errors={errors.phone} />

                                <input type="submit" className="btn btn-light btn-block" value="Add Contact" />
                            </form>
                        </div>

                    </div>
                )
            }}
        </Consumer>)


    }
}
export default AddContact;