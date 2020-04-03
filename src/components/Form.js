import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    let formData ={ firstName : this.state.firstName, lastName: this.state.lastName }
    let data = this.state.submittedData.concat(formData)
    this.setState({submittedData: data})
  }
  listOfSubmissions =() => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }
  handleChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
      <form onSubmit={event=> this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        <input type='submit'/>
      </form>
      {this.listOfSubmissions()}
    </div>
    )
  }
}

export default Form;
