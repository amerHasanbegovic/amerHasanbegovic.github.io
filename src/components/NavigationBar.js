import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'

class NavigationBar extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-sm'>
          <div className='container'>
            <Link className='navbar-brand' to='/'>
              Portfolio
            </Link>
            <button
              className='navbar-toggler d-lg-none'
              type='button'
              data-toggle='collapse'
              data-target='#collapsibleNavId'
              aria-controls='collapsibleNavId'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span>
                <i className='fa fa-bars' />
              </span>
            </button>
            <div
              className='collapse navbar-collapse navbar-right'
              id='collapsibleNavId'
            >
              <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/contact'>
                    Contact
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='dropdownId'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Social
                  </a>
                  <div className='dropdown-menu' aria-labelledby='dropdownId'>
                    <a
                      className='dropdown-item'
                      href='https://github.com/amerHasanbegovic'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-github'>
                        <span className='ml-1'>Github</span>
                      </i>
                    </a>
                    <a
                      className='dropdown-item'
                      href='https://www.facebook.com/amer.hasanbegovic'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-facebook'>
                        <span className='ml-1'>Facebook</span>
                      </i>
                    </a>
                    <a
                      className='dropdown-item'
                      href='https://www.instagram.com/amer.hasanbegovic'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-instagram'>
                        <span className='ml-1'>Instagram</span>
                      </i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavigationBar
