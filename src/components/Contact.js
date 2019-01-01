import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render () {
    return (
      <div className='Contact'>
        <hr />
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-6 text-center mb-5'>
              <h1>Feel free to contact me</h1>
            </div>
            <div className='col-md-6 col-sm-12 text-center pt-5'>
              <h2>
                <i className='fa fa-envelope' /> Send an email at
              </h2>
              <p>amer.hasanbegovic@hotmail.com</p>
            </div>
            <div className='col-md-6 col-sm-12 text-center pt-5'>
              <h2>Or check out my social links</h2>
              <div className='pt-2'>
                <p>
                  <a
                    href='https://github.com/amerHasanbegovic'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-github'>
                      <span className='ml-1'>Github</span>
                    </i>
                  </a>
                </p>
                <p>
                  <a
                    href='https://www.facebook.com/amer.hasanbegovic'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-facebook'>
                      <span className='ml-1'>Facebook</span>
                    </i>
                  </a>
                </p>
                <p>
                  <a
                    href='https://www.instagram.com/amer.hasanbegovic'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-instagram'>
                      <span className='ml-1'>Instagram</span>
                    </i>
                  </a>
                </p>
              </div>
            </div>

            <div className='col-md-6 form'>
              <h2 className='mb-3 mt-3'>Leave your comment</h2>
              <form>
                <div className='form-group'>
                  <input name="name" type='text' className='form-control' placeholder="Name"/>
                  <small>Enter your name</small>
                </div>
                <div className='form-group'>
                  <input name="email" type='email' className='form-control' placeholder="Email"/>
                  <small>Enter your email adress</small>
                </div>
                <div className='form-group'>
                  <textarea name="comment" type='text' className='form-control' placeholder="Comment"/>
                  <small>Leave your comment</small>
                </div>
                <input type='submit' className='btn' value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact
