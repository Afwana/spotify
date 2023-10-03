import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column text-light'>
                    <h6 className='mt-5 fw-bolder'> Company </h6>
                    <a className='links mt-1'> About </a>
                    <a className='links mt-1'> Jobs </a>
                    <a className='links mt-1'> For the Record </a>
                </div>
                <div className='d-flex flex-column text-light'>
                    <h6 className='mt-5 fw-bolder'> Communities </h6>
                    <a className='links mt-1'> For Artist </a>
                    <a className='links mt-1'> Developers </a>
                    <a className='links mt-1'> Advertising </a>
                    <a className='links mt-1'> Investors </a>
                    <a className='links mt-1'> vendors </a>
                </div>
                <div className='d-flex flex-column text-light'>
                    <h6 className='mt-5 fw-bolder'> Useful links </h6>
                    <a className='links mt-1'> Support </a>
                    <a className='links mt-1'> Free Mobile App </a>
                </div>
                <div className="d-flex text-light">
                    <button className='btn text-light bg-dark' style={{ borderRadius: '25px',height:'45px' ,marginTop:'40px'}}><i className="fa-brands fa-instagram" ></i></button>
                    <button className='btn text-light bg-dark ms-4' style={{ borderRadius: '25px',height:'45px' ,marginTop:'40px' }}><i className='fa-brands fa-twitter'></i></button>
                    <button className='btn text-light bg-dark ms-4' style={{ borderRadius: '25px',height:'45px' ,marginTop:'40px' }}><i className='fa-brands fa-facebook'></i></button>
                </div>
            </div>
            <hr />
            <h6 className='text-secondary'> &copy; 2023 Spotify AB </h6>
        </div>
    )
}

export default Footer