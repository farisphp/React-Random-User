import React, { Component } from 'react'
import Table from './components/Table';
import { getUser } from "./services/UserService";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  
    this.state = {
      user: [],
      page: 1,
      size: 10,
      search: "",
      gender: "all",
      error: ""
    }
  }
  
  componentDidMount() {
    this.getUser();
  }

  async getUser(){
    const { page, size, search, gender } = this.state;
    const userRes = await getUser(page, size, search, gender)
    this.setState(userRes);
  }

  handleSearch(search) {
    this.setState({
      search: search
    });
  }

  handleGenderChange(gender) {
    this.setState({
      gender: gender
    }, () => this.getUser())
  }
  
  resetFilter(){
    this.setState({
      search: "",
      gender: "all"
    }, () => this.getUser())
  }

  handlePageChange(page){
    this.setState({
      page: page
    },  () => this.getUser())
  }

  render() {
    const { user, search, gender, page, error } = this.state;
    return (
      <div className="container mx-auto py-5 px-5">
        <header>
          <h1 className="text-lg font-bold">Ajaib Personal Test</h1>
        </header>
        <main>
          <Table 
            data={user}
            search={search}
            handleSearch={this.handleSearch}
            gender={gender} 
            handleGenderChange={this.handleGenderChange}
            resetFilter={this.resetFilter}
            getUser={this.getUser}
            page={page}
            handlePageChange={this.handlePageChange}
            error={error}
          />
        </main>
      </div>
    )
  }
}
