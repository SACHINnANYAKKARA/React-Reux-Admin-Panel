import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import './Men.css';


class book extends Component {
  
    /*
    
    {
     bookId
      "title":"MadolDuwa",
      "isbnNumber":"wrt54656d",
      "year":"2097",
      "price":345,
      "publisher":"kumara",
      "status":"Publish",
      "authorId":1,
      "categoryId":1
      
  }
  
  */
    
    state = {
  
      books: [],
      newBookData: {
        
        title: '',
        isbnNumber: '',
        year: '',
        price: '',
        publisher: '',
        status: '',
        authorId: '',
        categoryId: ''
      },
  
      editBookData: {
  
        bookId: '',
        title: '',
        isbnNumber: '',
        year: '',
        price: '',
        publisher: '',
        status: '',
        authorId: '',
        categoryId: ''
  
      },
      newBookModal: false,
      editBookModal: false
    }
    componentWillMount() {
      this._refreshBooks();
    }
    toggleNewBookModal() {
      this.setState({
        newBookModal: ! this.state.newBookModal
      });
    }
    toggleEditBookModal() {
      this.setState({
        editBookModal: ! this.state.editBookModal
      });
    }
    addBook() {
      axios.post('localhost:8081/api/invitation/books', this.state.newBookData).then((response) => {
        let { books } = this.state;
  
        books.push(response.data);
  
        this.setState({ books, newBookModal: false, newBookData: {
          title: '',
          isbnNumber: '',
          year: '',
          price: '',
          publisher: '',
          status: '',
          authorId: '',
          categoryId: ''
        }});
      });
    }
    updateBook() {
      let { title, isbnNumber,year,price,publisher,status,authorId,categoryId } = this.state.editBookData;
  
      axios.put('localhost:8081/api/invitation/books/' + this.state.editBookData.bookId, {
        title, isbnNumber,year,price,publisher,status,authorId,categoryId
      }).then((response) => {
        this._refreshBooks();
  
        this.setState({
          editBookModal: false, editBookData: { bookId: '', title: '', isbnNumber: '', year: '', price: '', publisher: '' , status: '', authorId: '', categoryId: '' }
        })
      });
    }
    editBook(bookId, title, isbnNumber,year,price,publisher,status,authorId,categoryId) {
      this.setState({
        editBookData: { bookId, title, isbnNumber,year,price,publisher,status,authorId,categoryId }, editBookModal: ! this.state.editBookModal
      });
    }
    deleteBook(bookId) {
      axios.delete('localhost:8081/api/invitation/books/' + bookId).then((response) => {
        this._refreshBooks();
      });
    }
    _refreshBooks() {
      axios.get('localhost:8081/api/invitation/books').then((response) => {
        this.setState({
          books: response.data
        })
      });
    }
    render() {
      let books = this.state.books.map((book) => {
        return (
          <tr key={book.bookId}>
            <td>{book.title}</td>
            <td>{book.isbnNumber}</td>
            <td>{book.year}</td>
            <td>{book.price}</td>
            <td>{book.publisher}</td>
            <td>{book.status}</td>
            <td>
              <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.bookId, book.title, book.isbnNumber,book.year,book.price,book.publisher,book.status,book.authorId,book.categoryId)}>Edit</Button>
              <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.bookId)}>Delete</Button>
            </td>
          </tr>
        )
      });
      return (
        <div className="App container">
  
        <h1>Books App</h1>
  
        <Button className="my-3" color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
  
        <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)}>
          <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input id="title" value={this.state.newBookData.title} onChange={(e) => {
                let { newBookData } = this.state;
  
                newBookData.title = e.target.value;
  
                this.setState({ newBookData });
              }} />
            </FormGroup>
  
            <FormGroup>
              <Label for="isbnNumber">IsbnNumber</Label>
              <Input id="isbnNumber" value={this.state.newBookData.isbnNumber} onChange={(e) => {
                let { newBookData } = this.state;
  
                newBookData.isbnNumber = e.target.value;
  
                this.setState({ newBookData });
              }} />
            </FormGroup>
  
            <FormGroup>
              <Label for="year">year</Label>
              <Input id="year" value={this.state.newBookData.year} onChange={(e) => {
                let { newBookData } = this.state;
  
                newBookData.year = e.target.value;
  
                this.setState({ newBookData });
              }} />
            </FormGroup>
  
            <FormGroup>
              <Label for="price">price</Label>
              <Input id="price" value={this.state.newBookData.price} onChange={(e) => {
                let { newBookData } = this.state;
  
                newBookData.price = e.target.value;
  
                this.setState({ newBookData });
              }} />
            </FormGroup>
  
            <FormGroup>
              <Label for="publisher">publisher</Label>
              <Input id="publisher" value={this.state.newBookData.publisher} onChange={(e) => {
                let { newBookData } = this.state;
  
                newBookData.publisher = e.target.value;
  
                this.setState({ newBookData });
              }} />
            </FormGroup>
  
            <FormGroup>
              <Label for="status">status</Label>
              <Input id="status" value={this.state.newBookData.status} onChange={(e) => {
                let { newBookData } = this.state;
  
                newBookData.status = e.target.value;
  
                this.setState({ newBookData });
              }} />
            </FormGroup>
  
            <FormGroup>
              <Label for="authorId">authorId</Label>
              <Input id="authorId" value={this.state.newBookData.authorId} onChange={(e) => {
                let { newBookData } = this.state;
  
                newBookData.authorId = e.target.value;
  
                this.setState({ newBookData });
              }} />
            </FormGroup>
  
            <FormGroup>
              <Label for="categoryId">categoryId</Label>
              <Input id="categoryId" value={this.state.newBookData.categoryId} onChange={(e) => {
                let { newBookData } = this.state;
  
                newBookData.categoryId = e.target.value;
  
                this.setState({ newBookData });
              }} />
            </FormGroup>
  
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
  
        <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
          <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit a new book</ModalHeader>
          <ModalBody>
  
            <FormGroup>
              <Label for="title">Title</Label>
              <Input id="title" value={this.state.editBookData.title} onChange={(e) => {
                let { editBookData } = this.state;
  
                editBookData.title = e.target.value;
  
                this.setState({ editBookData });
              }} />
            </FormGroup>
  
           <FormGroup>
              <Label for="isbnNumber">isbnNumber</Label>
              <Input id="isbnNumber" value={this.state.editBookData.isbnNumber} onChange={(e) => {
                let { editBookData } = this.state;
  
                editBookData.isbnNumber = e.target.value;
  
                this.setState({ editBookData });
              }} />
           </FormGroup>
  
           <FormGroup>
              <Label for="year">year</Label>
              <Input id="year" value={this.state.editBookData.year} onChange={(e) => {
                let { editBookData } = this.state;
  
                editBookData.year = e.target.value;
  
                this.setState({ editBookData });
              }} />
           </FormGroup>
  
           <FormGroup>
              <Label for="price">price</Label>
              <Input id="price" value={this.state.editBookData.price} onChange={(e) => {
                let { editBookData } = this.state;
  
                editBookData.price = e.target.value;
  
                this.setState({ editBookData });
              }} />
           </FormGroup>
  
           
           <FormGroup>
              <Label for="publisher">publisher</Label>
              <Input id="publisher" value={this.state.editBookData.publisher} onChange={(e) => {
                let { editBookData } = this.state;
  
                editBookData.publisher = e.target.value;
  
                this.setState({ editBookData });
              }} />
           </FormGroup>
  
           <FormGroup>
              <Label for="status">status</Label>
              <Input id="status" value={this.state.editBookData.status} onChange={(e) => {
                let { editBookData } = this.state;
  
                editBookData.status = e.target.value;
  
                this.setState({ editBookData });
              }} />
           </FormGroup>
  
           <FormGroup>
              <Label for="authorId">authorId</Label>
              <Input id="authorId" value={this.state.editBookData.authorId} onChange={(e) => {
                let { editBookData } = this.state;
  
                editBookData.authorId = e.target.value;
  
                this.setState({ editBookData });
              }} />
           </FormGroup>
  
           <FormGroup>
              <Label for="categoryId">categoryId</Label>
              <Input id="categoryId" value={this.state.editBookData.categoryId} onChange={(e) => {
                let { editBookData } = this.state;
  
                editBookData.categoryId = e.target.value;
  
                this.setState({ editBookData });
              }} />
           </FormGroup>
  
  
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
  
  
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>IsbnNumber</th>
                <th>year</th>
                <th>Price</th>
                <th>publisher</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
  
            <tbody>
              {books}
            </tbody>
          </Table>
        </div>
      );
    }
  }
  
  export default book;