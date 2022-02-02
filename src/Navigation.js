import React from 'react';
import './Navigation.css';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className='outter-nav'>
        <div className='logo-jio'></div>
      <div className='nav'>
            <div className='nav-inside'>
                <div className='inner-nav'>
                    <div className='inner-nav-element'>
                        <div className='inner-nav-logo'>
                    <div className='inner-nav-text'>Why to DEVELOP?</div></div>
                    </div>
                    
                    <div className='border'></div>

                    <div className='inner-nav-element-1'>
                        <div className='inner-nav-logo-question'>
                    <div className='inner-nav-text-1'>How to DEVELOP?</div></div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
  }
}