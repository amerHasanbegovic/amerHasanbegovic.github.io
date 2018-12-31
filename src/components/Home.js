import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  
  render () {
    return (
      <div className='Home'>
        <div id='carouselId' className='carousel slide' data-ride='carousel'>
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselId'
              data-slide-to='0'
              className='active'
            />
            <li data-target='#carouselId' data-slide-to='1' />
            <li data-target='#carouselId' data-slide-to='2' />
          </ol>
          <div className='carousel-inner' role='listbox'>
            <div className='carousel-item active'>
              <img
                src='https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='First slide'
              />
              <div className='carousel-caption d-md-block'>
                <h3>Welcome</h3>
                <p>
                  Built with{' '}
                  <a
                    href='https://getbootstrap.com/'
                    style={{ color: 'white', textDecoration: 'none' }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Bootstrap 4
                  </a>{' '}
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src='https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='Second slide'
              />
              <div className='carousel-caption d-md-block'>
                <h3>Simple Design</h3>
                <p>The simplest things are always the best</p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src='https://images.pexels.com/photos/374811/pexels-photo-374811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='Third slide'
              />
              <div className='carousel-caption d-md-block'>
                <h3>bla bla</h3>
                <p>bla bla bla</p>
              </div>
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselId'
            role='button'
            data-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselId'
            role='button'
            data-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>

        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4'>
              <img
                className='cardimg'
                src='https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='Slide'
              />
              <h3>Programming</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='col-md-4'>
              <img
                className='cardimg'
                src='https://images.pexels.com/photos/820673/pexels-photo-820673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='Slide'
              />
              <h3>Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='col-md-4'>
              <img
                className='cardimg'
                src='https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='Slide'
              />
              <h3>Bla bla</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className='container'>
        <div className="row">
          <div className='col-md-12 aboutImg mb-5'>
            <div className="ml-5 mt-5">
            <h1>About</h1>
            <p>Open modal for more information about project</p>
            <button
              type='button'
              className='btn'
              data-toggle='modal'
              data-target='#modelId'
            >
              Open modal
            </button>
            </div>

            <div
              className='modal fade'
              id='modelId'
              tabIndex='-1'
              role='dialog'
              aria-labelledby='modelTitleId'
              aria-hidden='true'
            >
              <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title ml-3'>About project</h5>
                    <button
                      type='button'
                      className='close'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div className='modal-body'>
                    <div className='container-fluid'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn' data-dismiss='modal'>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          </div>
        </div>
      </div>
    )
  }
}

export default Home
