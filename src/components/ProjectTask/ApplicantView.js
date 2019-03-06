import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import './Men.css';

class ApplicantView extends Component {

    /*
            "id": 1,
        "first_name": "sachin",
        "last_name": "sachin",
        "born": "sachin",
        "email": "sachinn",
        "e_level": "sachin",
        "gender": "sachin",
        "city": "sachine",
        "street": "sachin",
        "zipcode": "sachinn",
        "country": "sachin",
        "phone_number": "sajjjjjjjjjjjjjjjjjjjke",
        "about_me": "sachinhkddd",
        "image": "sachin",
        "resume": "sachinh",
      */

    state = {
        books: [],
        newBookData: {

            first_name: '',
            last_name: '',
            born: '',
            email: '',
            e_level: '',
            gender: '',
            city: '',
            street: '',
            zipcode: '',
            country: '',
            phone_number: '',
            about_me: '',
            image: '',
            resume: ''

        },

        editBookData: {
            id: '',
            first_name: '',
            last_name: '',
            born: '',
            email: '',
            e_level: '',
            gender: '',
            city: '',
            street: '',
            zipcode: '',
            country: '',
            phone_number: '',
            about_me: '',
            image: '',
            resume: ''

        },

        newBookModal: false,
        editBookModal: false
    }
    componentWillMount() {
        this._refreshBooks();
    }
    toggleNewBookModal() {
        this.setState({
            newBookModal: !this.state.newBookModal
        });
    }
    toggleEditBookModal() {
        this.setState({
            editBookModal: !this.state.editBookModal
        });
    }
    
 
 
    _refreshBooks() {
        axios.get('http://localhost:8090/users').then((response) => {
            this.setState({
                books: response.data
            })
        });
    }
    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr key={book.id}>
                    <td>{book.first_name}</td>
                    <td>{book.last_name}</td>
                    <td>{book.born}</td>
                    <td>{book.email}</td>
                    <td>{book.e_level}</td>
                    <td>{book.gender}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" >View Applicant</Button>
                       
                    </td>
                </tr>
            )
        });
        return (
            <div className="Appcontainer">

          


                <table class="ui single line table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Total Employee</th>
                            <th>Department Telephone</th>
                            <th>Location</th>
                            <th>department Role</th>
                            <th>Company Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ApplicantView;
