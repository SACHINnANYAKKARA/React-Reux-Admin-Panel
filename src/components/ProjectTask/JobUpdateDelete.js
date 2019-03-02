import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import './Men.css';

class JobUpdateDelete extends Component {

    /*
            "id": 1,
        "jobtitle": "fd",
        "city": "Panadraya",
        "country": "Sri Lanka",
        "job_category": "3",
        "job_type": "fd",
        "start_date": "fd",
        "closing_date": "de",
        "expected_salary": "3",
        "job_description": "df",
        "job_responsability": "fd",
        "requirment": "fd",
      */

    state = {
        books: [],
        newBookData: {
            jobtitle: '',
            city: '',
            country: '',
            job_category: '',
            job_type: '',
            start_date: '',
            closing_date: '',
            expected_salary: '',
            job_description: '',
            job_responsability: '',
            requirment: ''
        },

        editBookData: {
            id: '',
            jobtitle: '',
            city: '',
            country: '',
            job_category: '',
            job_type: '',
            start_date: '',
            closing_date: '',
            expected_salary: '',
            job_description: '',
            job_responsability: '',
            requirment: ''
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
        let { jobtitle, city,country,job_category,job_type,start_date,closing_date,expected_salary,job_description,job_responsability,requirment } = this.state.editBookData;

        axios.put('http://localhost:8090/postajob/' + this.state.editBookData.id, {
            jobtitle, city , country , job_category,job_type,start_date,closing_date,expected_salary,job_description,job_responsability,requirment
        }).then((response) => {
            this._refreshBooks();

            this.setState({
                editBookModal: false, editBookData: { id: '', jobtitle: '', city: '',country: '',job_category: '',job_type: '',start_date: '',closing_date: '',expected_salary: '',job_description: '',job_responsability: '',requirment: '' }
            })
        });
    
    }
    editBook(id, jobtitle, city,country,job_category,job_type,start_date,closing_date,expected_salary,job_description,job_responsability,requirment) {
        this.setState({
            editBookData: { id, jobtitle, city,country,job_category,job_type,start_date,closing_date,expected_salary,job_description,job_responsability,requirment}, editBookModal: !this.state.editBookModal
        });
    }
    deleteBook(id) {
        axios.delete('http://localhost:8090/postajob/' + id).then((response) => {
            this._refreshBooks();
        });
    }
    _refreshBooks() {
        axios.get('http://localhost:8090/postajob').then((response) => {
            this.setState({
                books: response.data
            })
        });
    }
    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr key={book.id}>
                    <td>{book.jobtitle}</td>
                    <td>{book.city}</td>
                    <td>{book.country}</td>
                    <td>{book.job_category}</td>
                    <td>{book.job_type}</td>
                    <td>{book.start_date}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.id, book.jobtitle, book.city,book.country,book.job_category,book.job_type,book.start_date,book.closing_date,book.expected_salary,book.job_description,book.job_responsability,book.requirment)}>Edit</Button>
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
                            <Label for="Department Name">Job Title</Label>
                            <Input id="department_name" value={this.state.editBookData.jobtitle} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.jobtitle = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="rating">City</Label>
                            <Input id="total_employee" value={this.state.editBookData.city} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.city = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Country</Label>
                            <Input id="department_telephone" value={this.state.editBookData.country} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.country = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Job Category</Label>
                            <Input id="location" value={this.state.editBookData.job_category} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.job_category = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Start Date</Label>
                            <Input id="department_role" value={this.state.editBookData.start_date} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.start_date = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Closing Date</Label>
                            <Input id="company_name" value={this.state.editBookData.closing_date} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.closing_date = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Expected Salery</Label>
                            <Input id="company_name" value={this.state.editBookData.expected_salary} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.expected_salary = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Job Description</Label>
                            <Input id="company_name" value={this.state.editBookData.job_description} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.expected_salary = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Job Responsbility</Label>
                            <Input id="company_name" value={this.state.editBookData.job_responsability} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.job_responsability = e.target.value;

                                this.setState({ editBookData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rating">Requriment</Label>
                            <Input id="company_name" value={this.state.editBookData.requirment} onChange={(e) => {
                                let { editBookData } = this.state;

                                editBookData.requirment = e.target.value;

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

export default JobUpdateDelete;
