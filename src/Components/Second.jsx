import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Second.css'

function Second() {
    return (
        <div className='side-bar p-2 rounded' style={{ background: 'rgb(19,16,18)', background: 'linear-gradient(0deg, rgba(19,16,18,1) 60%, rgba(89,75,88,1) 100%)'}}>
            <div className='d-flex justify-content-between'>
                <div className="d-flex justify-content-start">
                    <Button className='me-3' style={{ border: 'none', borderRadius: '25px', backgroundColor: '#0D0E0D' }}><i className="fa-solid fa-angle-left" style={{color: '#ffffff'}}></i></Button>
                    <Button className='me-3' style={{ border: 'none', borderRadius: '25px', backgroundColor: '#0D0E0D' }}><i className="fa-solid fa-angle-right" style={{color: '#ffffff'}}></i></Button>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button className='me-3' style={{ border: 'none', borderRadius: '25px', backgroundColor: '#0D0E0D' }}><i className="fa-regular fa-bell" style={{ color: '#ffffff' }}></i></Button>
                    <Button style={{ border: 'none', borderRadius: '45px', backgroundColor: '#0D0E0D' }}><i className="fa-solid fa-users" style={{ color: '#ffffff' }}></i></Button>
                </div>
            </div>
            <div className='mt-4 rounded shadow' style={{ background: 'rgb(19,16,18)', background: 'linear-gradient(90deg, rgba(19,16,18,1) 60%, rgba(89,75,88,1) 100%)' }}>
                <Card className='d-flex flex-row p-2 shadow' style={{ width: '100%', backgroundColor: 'transparent', border: 'none' }}>
                    <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.zMLGBIe1J_tG1WmgKndOggHaEK&pid=Api&P=0&h=220" style={{ width: '250px', height: '300px' }} className='p-2' />
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <p className='text-light p-2' style={{ fontSize: '10px' }}> ALBUM </p>
                            <p className='text-light p-2' style={{ fontSize: '10px', backgroundColor: '#000000' }}> Sponsored </p>
                        </div>
                        <Card.Title><Button className='btn1 fw-bolder' style={{ fontSize: '55px', color: '#ffffff', backgroundColor: 'transparent', border: 'none' }}> Farq hai </Button></Card.Title>
                        <Card.Text className='text-light'>
                            <h6>Suzonn</h6>
                            <h6 className='mt-2'>Listen to the latest trending hit by Suzonn</h6>
                        </Card.Text>
                        <Button variant="success" style={{ borderRadius: '30px', width: '100px', height: '50px' }}> Play </Button>
                        <Button className='border light ms-4' variant="outline-dark" style={{ borderRadius: '30px', width: '100px', height: '50px', color: 'white' }}> Save </Button>
                        <Button style={{ backgroundColor: 'transparent', border: 'none' }} className='ms-3 fs-3'><i className="fa-solid fa-ellipsis" style={{ color: '#ffffff' }}></i></Button>
                    </Card.Body>
                </Card>
            </div>
            

            <div className='d-flex justify-content-between'>
                <h3 className='p-2 mt-2 text-light fw-bolder'> Spotify Playlists </h3>

                <button className='showbtn' style={{backgroundColor:'transparent',border:'none',color:'#ffffff'}}> show all </button>
            </div>

            <div className='d-flex justify-content-between'>
                    <div>
                        <Card className='content1' style={{ width: '13rem',backgroundColor:'#2D2F2D'}}>
                            <Card.Img variant="top"className='p-2' src="https://images.genius.com/a378b1c370e569baa1ac7a01225319ac.640x640x1.jpg" />
                            <Card.Body className='text-light'>
                                <Card.Title> Todays's Top Hits </Card.Title>
                                <Card.Text>
                                     Tate McRae on top of the Hottest 50!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='content p-3 rounded' style={{width:'13rem'}}>
                            <button className='btn'><img className='p-2' style={{width:'100px',height:'100px',marginLeft:'90px',marginTop:'170px'}} src="http://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button-1.png" alt="playButton" /></button>
                        </div>
                    </div>

                    <div>
                        <Card className='content1' style={{ width: '13rem',backgroundColor:'#2D2F2D'}}>
                            <Card.Img variant="top"className='p-2' src="https://tse2.mm.bing.net/th?id=OIP.ovD0fC1-QQfHnYI31KGZvAHaHa&pid=Api&P=0&h=220" />
                            <Card.Body className='text-light'>
                                <Card.Title> Rap Cavier </Card.Title>
                                <Card.Text>
                                     New Music from Lil Wayne, Lil Durk...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='content p-3 rounded' style={{width:'13rem'}}>
                            <button className='btn'><img className='p-2' style={{width:'100px',height:'100px',marginLeft:'90px',marginTop:'170px'}} src="http://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button-1.png" alt="playButton" /></button>
                        </div>
                    </div>

                    <div>
                        <Card className='content1' style={{ width: '13rem',backgroundColor:'#2D2F2D'}}>
                            <Card.Img variant="top"className='p-2' src="https://tse3.mm.bing.net/th?id=OIP.2lw7IYK9_V_bTqPB5IxSeAHaHa&pid=Api&P=0&h=220" />
                            <Card.Body className='text-light'>
                                <Card.Title> All Out 2010s </Card.Title>
                                <Card.Text>
                                     The biggest songs of the 2010s.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='content p-3 rounded' style={{width:'13rem'}}>
                            <button className='btn'><img className='p-2' style={{width:'100px',height:'100px',marginLeft:'90px',marginTop:'170px'}} src="http://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button-1.png" alt="playButton" /></button>
                        </div>
                    </div>

                    <div>
                        <Card className='content1' style={{ width: '13rem',backgroundColor:'#2D2F2D'}}>
                            <Card.Img variant="top"className='p-2' src="https://tse2.mm.bing.net/th?id=OIP.89_eGGUWnk3RzHwGD2EiKAHaHa&pid=Api&P=0&h=220" />
                            <Card.Body className='text-light'>
                                <Card.Title> Winter of Love </Card.Title>
                                <Card.Text>
                                     Get cosy and snuggle with these Hindi...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='content p-3 rounded' style={{width:'13rem'}}>
                            <button className='btn'><img className='p-2' style={{width:'100px',height:'100px',marginLeft:'90px',marginTop:'170px'}} src="http://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button-1.png" alt="playButton" /></button>
                        </div>
                    </div>

                    <div>
                        <Card className='content1' style={{ width: '13rem',backgroundColor:'#2D2F2D'}}>
                            <Card.Img variant="top"className='p-2' src="https://tse2.mm.bing.net/th?id=OIP.PLiVcaC8BCyiP736CT--fwHaHa&pid=Api&P=0&h=220" />
                            <Card.Body className='text-light'>
                                <Card.Title> Bollywood Butter </Card.Title>
                                <Card.Text>
                                     B bole toh biggest blockbusters,right...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='content p-3 rounded' style={{width:'13rem'}}>
                            <button className='btn'><img className='p-2' style={{width:'100px',height:'100px',marginLeft:'90px',marginTop:'170px'}} src="http://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button-1.png" alt="playButton" /></button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Second