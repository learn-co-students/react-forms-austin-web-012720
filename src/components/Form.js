import React from 'react';

class Form extends React.Component {

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map( data => {
  //     return <div>
  //       <span>{data.firstName}</span>
  //       <span>{data.lastName}</span>
  //     </div>
  //   })
  // }

  render() {
    return (
      <div>
      <form>
        <input 
          type="text" 
          onChange={event => this.props.handleFirstNameChange(event)}
          value={this.props.formData.firstName} />
        <input 
          type="text" 
          onChange={event => this.props.handleLastNameChange(event)} 
          value={this.props.formData.lastName} />
      </form>
        {/* {this.listOfSubmissions()} */}
      </div>

    )
  }
}

export default Form;