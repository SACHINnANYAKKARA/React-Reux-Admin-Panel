import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import './Men.css';

class DepartmentUpdateDelete extends Component {

    /*
            department_name: "",
            total_employee: "",
            department_telephone: "",
            location: "",
            department_role: "",
            company_name: "",
      */

    state = {
        books: [],
        newBookData: {
            department_name: '',
            total_employee: '',
            department_telephone: '',
            location: '',
            department_role: '',
            company_name: ''
        },

        editBookData: {
            id: '',
            department_name: '',
            total_employee: '',
            department_telephone: '',
            location: '',
            department_role: '',
            company_name: ''
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
        let { department_name, total_employee,department_telephone,location,department_role,company_name } = this.state.editBookData;

        axios.put('http://localhost:8090/departments/' + this.state.editBookData.id, {
            department_name, total_employee , department_telephone , location,department_role,company_name
        }).then((response) => {
            this._refreshBooks();

            this.setState({
                editBookModal: false, editBookData: { id: '', department_name: '', total_employee: '',department_telephone: '',location: '',department_role: '',company_name: '' }
            })
        });
    
    }
    editBook(id, department_name, total_employee,department_telephone,location,department_role,company_name) {
        this.setState({
            editBookData: { id, department_name, total_employee,department_telephone,location,department_role,company_name }, editBookModal: !this.state.editBookModal
        });
    }
    deleteBook(id) {
        axios.delete('http://localhost:8090/departments/' + id).then((response) => {
            this._refreshBooks();
        });
    }
    _refreshBooks() {
        axios.get('http://localhost:8090/departments').then((response) => {
            this.setState({
                books: response.data
            })
        });
    }
    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr key={book.id}>
                    <td>{book.department_name}</td>
                    <td>{book.total_employee}</td>
                    <td>{book.department_telephone}</td>
                    <td>{book.location}</td>
                    <td>{book.department_role}</td>
                    <td>{book.company_name}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.id, book.department_name, book.total_employee,book.department_telephone,book.location,book.department_role,book.company_name)}>Edit</Button>
                        <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)}>Delete</Button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="Appcontainer">

                <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit a Department</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="Department Name">Department Name</Label>
                            <Input id="department_name" value={this.state.editBookData.department_name} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.department_name = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="rating">Total Employee</Label>
                            <Input id="total_employee" value={this.state.editBookData.total_employee} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.total_employee = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Department Telephone</Label>
                            <Input id="department_telephone" value={this.state.editBookData.department_telephone} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.department_telephone = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Location</Label>
                            <Input id="location" value={this.state.editBookData.location} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.location = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Department Role</Label>
                            <Input id="department_role" value={this.state.editBookData.department_role} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.department_role = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Company Name</Label>
                            <Input id="company_name" value={this.state.editBookData.company_name} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.company_name = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateBook.bind(this)}>Update Department</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                <table class="ui single line table">
                    <thead>
                        <tr>
                            <th>Department Name</th>
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

export default DepartmentUpdateDelete;
