import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import './Men.css';

class ViewMeeting extends Component {

    /*
        "meeting_subject": "ds",
        "reminds": "ds",
        "start_date": "2019-03-06T18:30:00.000+0000",
        "start_time": "21:00:00",
        "end_time": "19:05:06",
        "location": "ds",
        "description": "ds"

      */

    state = {
        books: [],
        newBookData: {
            meeting_subject: '',
            reminds: '',
            start_date: '',
            start_time: '',
            end_time: '',
            location: '',
            description: ''
     },

        editBookData: {
            id: '',
            meeting_subject: '',
            reminds: '',
            start_date: '',
            start_time: '',
            end_time: '',
            location: '',
            description: ''
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
    
    updateBook() {
        let { meeting_subject, reminds,start_date,start_time,end_time,location,description } = this.state.editBookData;

        axios.put('http://localhost:/users/2/meetingList' + this.state.editBookData.id, {
            meeting_subject, reminds , start_date ,start_time,end_time,location,description
        }).then((response) => {
            this._refreshBooks();

            this.setState({
                editBookModal: false, editBookData: { id: '', meeting_subject: '', reminds: '',start_date: '',start_time: '',end_time: '',location: '',description: '' }
            })
        });
    
    }
    editBook(id, meeting_subject, reminds,start_date,start_time,end_time,location,description) {
        this.setState({
            editBookData: { id,meeting_subject, reminds,start_date,start_time,end_time,location,description}, editBookModal: !this.state.editBookModal
        });
    }
    deleteBook(id) {
        axios.delete('http://localhost:8090/postajob/' + id).then((response) => {
            this._refreshBooks();
        });
    }
    _refreshBooks() {
        axios.get('http://localhost:8090/meetings').then((response) => {
            this.setState({
                books: response.data
            })
        });
    }
    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr key={book.id}>
                    <td>{book.meeting_subject}</td>
                    <td>{book.reminds}</td>
                    <td>{book.start_date}</td>
                    <td>{book.start_time}</td>
                    <td>{book.end_time}</td>
                    <td>{book.location}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.id, book.meeting_subject, book.reminds,book.start_date,book.start_time,book.end_time,book.location,book.description)}>Edit</Button>
                        <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)}>Delete</Button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="Appcontainer">

                <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>View Meeting</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="Department Name">Meeting Subject</Label>
                            <Input id="department_name" value={this.state.editBookData.meeting_subject} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.meeting_subject = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="rating">Reminds</Label>
                            <Input id="total_employee" value={this.state.editBookData.reminds} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.reminds = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Start Date</Label>
                            <Input id="department_telephone" value={this.state.editBookData.start_date} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.start_date = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Start Time</Label>
                            <Input id="location" value={this.state.editBookData.start_time} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.start_time = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">End Time</Label>
                            <Input id="department_role" value={this.state.editBookData.end_time} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.end_time = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Location</Label>
                            <Input id="company_name" value={this.state.editBookData.location} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.location = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Description</Label>
                            <Input id="company_name" value={this.state.editBookData.description} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.description = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                     
                   


                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateBook.bind(this)}>Update Meeting</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                <table class="ui single line table">
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Meeting Subject</th>
                            <th>Reminds</th>
                            <th>Start Date</th>
                            <th>Start Time</th>
                            <th>end Time</th>
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


export default ViewMeeting;
