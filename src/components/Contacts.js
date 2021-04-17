import React, { Component } from 'react'
import PropTypes from "prop-types"
import Contact from './Contact'

class Contacts extends Component {

  state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555'
                },
                {
                    id: 2,
                    name: 'Karen Williams',
                    email: 'karen@gmail.com',
                    phone: '555-555'
                },
                {
                    id: 3,
                    name: 'Henry Johnson',
                    email: 'henry@gmail.com',
                    phone: '555-555'
                }
            ]
        };
    
    render() {
        const { contacts } = this.state;
        return (

            <div>
                {contacts.map(contact => <Contact key= {contact.id} contact={contact} />)}
            </div>


        )
    }
}

export default Contacts;