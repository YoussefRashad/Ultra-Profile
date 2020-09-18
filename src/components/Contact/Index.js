import React, {Component} from 'react';

export default class Contact extends Component {
  handleSubmit = (e)=>{
  }
  render () {
    return (
      <form className="container my-5" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="h5">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="h5">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputPassword4"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="h5">Subject</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-3">
          <label className="h5">Textarea</label>
          <textarea
            className="form-control"
            id="validationTextarea"
            placeholder="Message"
            required
          />
        </div>
        <div className="text-center">
            <button type="submit" 
            className="btn btn-primary btn-lg"
            >Send Message</button>
        </div>
      </form>
    );
  }
}
