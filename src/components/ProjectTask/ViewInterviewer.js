import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import './Men.css';

class ViewInterviewer extends Component {


/*
  "interviewer_name": "sd",
    "position": "ds",
    "birth_date": "ds",
    "job_role": "ds",
    "working_experiance": "ds",
    "responsability": "sd",
    "comapny_name": "ds",
*/

    state = {
        books: [],
        newBookData: {
            interviewer_name: '',
            position: '',
            birth_date: '',
            job_role: '',
            working_experiance: '',
            responsability: '',
            comapny_name: ''
        },

        editBookData: {
            id: '',
            interviewer_name: '',
            position: '',
            birth_date: '',
            job_role: '',
            working_experiance: '',
            responsability: '',
            comapny_name: ''
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
        let { interviewer_name, position,birth_date,job_role,working_experiance,responsability,comapny_name } = this.state.editBookData;

        axios.put('http://localhost:8090/updateInterviewer/' + this.state.editBookData.id, {
            interviewer_name, position , birth_date , job_role,working_experiance,responsability,comapny_name
        }).then((response) => {
            this._refreshBooks();

            this.setState({
                editBookModal: false, editBookData: { id: '', interviewer_name: '', position: '',birth_date: '',job_role: '',working_experiance: '',responsability: '',comapny_name: '' }
            })
        });
    
    }
    editBook(id, interviewer_name,position,birth_date,job_role,working_experiance,responsability,comapny_name) {
        this.setState({
            editBookData: { id, interviewer_name,position,birth_date,job_role,working_experiance,responsability,comapny_name }, editBookModal: !this.state.editBookModal
        });
    }
    deleteBook(id) {
        axios.delete('http://localhost:8090/registorInterviewer/' + id).then((response) => {
            this._refreshBooks();
        });
    }
    _refreshBooks() {
        axios.get('http://localhost:8090/registorInterviewer').then((response) => {
            this.setState({
                books: response.data
            })
        });
    }
    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr key={book.id}>
                    <td>{book.interviewer_name}</td>
                    <td>{book.position}</td>
                    <td>{book.birth_date}</td>
                    <td>{book.job_role}</td>
                    <td>{book.working_experiance}</td>
                    <td>{book.comapny_name}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.id, book.interviewer_name, book.position,book.birth_date,book.job_role,book.working_experiance,book.comapny_name)}>Edit</Button>
                        <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)}>Delete</Button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="Appcontainer">

                <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit Interviewer Details</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="interviewer_name">Interviewer Name</Label>
                            <Input id="interviewer_name" value={this.state.editBookData.interviewer_name} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.interviewer_name = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="position">Position</Label>
                            <Input id="position" value={this.state.editBookData.position} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.position = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="birth_date">Birth Date</Label>
                            <Input id="birth_date" value={this.state.editBookData.birth_date} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.birth_date = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="job_role">Job Role</Label>
                            <Input id="job_role" value={this.state.editBookData.job_role} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.job_role = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="working_experiance">Working Experiance</Label>
                            <Input id="working_experiance" value={this.state.editBookData.working_experiance} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.working_experiance = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="responsability">Responsability</Label>
                            <Input id="responsability" value={this.state.editBookData.responsability} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.responsability = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="comapny_name">Comapny Name</Label>
                            <Input id="comapny_name" value={this.state.editBookData.comapny_name} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.comapny_name = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateBook.bind(this)}>Update Interviewer</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                <table class="ui single line table">
                    <thead>
                        <tr>
                            <th>Interviewer Name</th>
                            <th>Position</th>
                            <th>Birth Date</th>
                            <th>Job Role</th>
                            <th>Working Experiance</th>
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

export default ViewInterviewer;
