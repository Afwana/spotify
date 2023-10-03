import { Button, Card } from 'react-bootstrap';
import Second from './Components/Second';
import './App.css'
import Footer from './Components/Footer';

function App() {
  return (
    <div className='container-fluid' style={{ backgroundColor: 'black' }}>
      <div className='row d-flex mt-2' style={{ width: '100%' }}>
        <div className="col-lg-3 rounded p-3 shadow" style={{ backgroundColor: 'black' }}>
          <div className="fst shadow rounded p-3" style={{ backgroundColor: '#202420' }}>
            <Button className='ms-2 mt-2' style={{ border: 'none', backgroundColor: '#202420' }}><h5><i className="fa-solid fa-house me-2" style={{ color: '#ffffff' }}></i> Home </h5></Button> <br />
            <Button className='ms-2 mt-1' style={{ border: 'none', backgroundColor: '#202420', color: '#818682' }}><h5><i className="fa-solid fa-magnifying-glass me-2" style={{ color: '#818682' }}></i> Search </h5></Button>
          </div>
          <div className="scnd mt-3 rounded shadow p-3" style={{ backgroundColor: '#202420'}}>
            <h5 style={{ color: '#818682' }}><i className="fa-solid fa-bars-staggered fa-rotate-90 me-2" style={{ color: '#818682' }}></i> Your Library <i class="fa-solid fa-plus me-1" style={{ marginLeft: '90px' }}></i> <i class="fa-solid fa-arrow-right ms-2"></i> </h5>
            <div className='mt-3'>
              <div className='mb-1 shadow'>
                <Button className='mb-1' style={{ border: 'none', borderRadius: '15px', backgroundColor: '#0D0E0D' }}> Playlists </Button>{' '}
                <Button className='mb-1' style={{ border: 'none', borderRadius: '15px', backgroundColor: '#0D0E0D' }}> Albums </Button>{' '}
                <Button className='mb-1' style={{ border: 'none', borderRadius: '15px', backgroundColor: '#0D0E0D' }}> Artists </Button>{' '}
              </div>
              <div className='side-bar'>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <Button style={{ backgroundColor: '#202420', border: 'none', color: '#818682' }}> <i className="fa-solid fa-magnifying-glass me-2"></i> </Button>
                  <Button style={{ backgroundColor: '#202420', border: 'none', color: '#818682' }}><span className='me-1'> Recents </span><i className="fa-solid fa-ellipsis-vertical"></i> <i className="fa-solid fa-bars"></i> </Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#202420', width: '100%', border: 'none'}}>
                    <Card className='d-flex flex-row justify-content-start align-items-center' style={{ width: '100%', backgroundColor: '#202420', border: 'none' }}>
                      <Card.Img src="https://thumbs.dreamstime.com/z/love-heart-rounded-square-raster-icon-image-style-flat-symbol-perforated-blue-shape-137904190.jpg" style={{ width: '50px', height: '50px' }} />
                      <Card.Body>
                        <Card.Title style={{ color: '#ffffff', textAlign: 'left' }}> Liked Songs </Card.Title>
                        <Card.Text style={{ color: '#818682', textAlign: 'left' }}>
                          Playlist . 66 Songs
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#202420', width: '100%', border: 'none' }}>
                    <Card className='d-flex flex-row justify-content-start align-items-center' style={{ width: '100%', backgroundColor: '#202420', border: 'none' }}>
                      <Card.Img src="https://tse4.mm.bing.net/th?id=OIP.c3sde77jDbnULAnB5IlnKgHaHV&pid=Api&P=0&h=220" style={{ width: '50px', height: '50px', border: 'none', borderRadius: '25px' }} />
                      <Card.Body>
                        <Card.Title style={{ color: '#ffffff', textAlign: 'left' }}> Shreya Ghoshal </Card.Title>
                        <Card.Text style={{ color: '#818682', textAlign: 'left' }}>
                          Artist
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#202420', width: '100%', border: 'none' }}>
                    <Card className='d-flex flex-row justify-content-start align-items-center' style={{ width: '100%', backgroundColor: '#202420', border: 'none' }}>
                      <Card.Img src="https://i.scdn.co/image/4df9740f3f6bfcc28e9c8c57ecf4c7eda4a2e42b" style={{ width: '50px', height: '50px', border: 'none', borderRadius: '25px' }} />
                      <Card.Body>
                        <Card.Title style={{ color: '#ffffff', textAlign: 'left' }}> A.R. Rahman </Card.Title>
                        <Card.Text style={{ color: '#818682', textAlign: 'left' }}>
                          Artist
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#202420', width: '100%', border: 'none' }}>
                    <Card className='d-flex flex-row justify-content-start align-items-center' style={{ width: '100%', backgroundColor: '#202420', border: 'none' }}>
                      <Card.Img src="https://tse1.mm.bing.net/th?id=OIP.s8jz7kWdVPRGBSA8YrxJ7AHaHa&pid=Api&P=0&h=220" style={{ width: '50px', height: '50px', border: 'none', borderRadius: '25px' }} />
                      <Card.Body>
                        <Card.Title style={{ color: '#ffffff', textAlign: 'left' }}> Anirudh Ravichander </Card.Title>
                        <Card.Text style={{ color: '#818682', textAlign: 'left' }}>
                          Artist
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#202420', width: '100%', border: 'none' }}>
                    <Card className='d-flex flex-row justify-content-start align-items-center' style={{ width: '100%', backgroundColor: '#202420', border: 'none' }}>
                      <Card.Img src="https://tse3.mm.bing.net/th?id=OIP.YCmc2HCb0aFT2ThI4no7VAHaHa&pid=Api&P=0&h=220" style={{ width: '50px', height: '50px', border: 'none', borderRadius: '25px' }} />
                      <Card.Body>
                        <Card.Title style={{ color: '#ffffff', textAlign: 'left' }}> Armaan Malik </Card.Title>
                        <Card.Text style={{ color: '#818682', textAlign: 'left' }}>
                          Artist
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#202420', width: '100%', border: 'none' }}>
                    <Card className='d-flex flex-row justify-content-start align-items-center' style={{ width: '100%', backgroundColor: '#202420', border: 'none' }}>
                      <Card.Img src="https://tse3.mm.bing.net/th?id=OIP.sIxRTjwNpf3LYpHAG3berAHaGJ&pid=Api&P=0&h=220" style={{ width: '50px', height: '50px', border: 'none', borderRadius: '25px' }} />
                      <Card.Body>
                        <Card.Title style={{ color: '#ffffff', textAlign: 'left' }}> Arijith Singh </Card.Title>
                        <Card.Text style={{ color: '#818682', textAlign: 'left' }}>
                          Artist
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#202420', width: '100%', border: 'none' }}>
                    <Card className='d-flex flex-row justify-content-start align-items-center' style={{ width: '100%', backgroundColor: '#202420', border: 'none' }}>
                      <Card.Img src="https://tse1.mm.bing.net/th?id=OIP.nuFZKmGdBBkMaSrNyJQRiQAAAA&pid=Api&P=0&h=220" style={{ width: '50px', height: '50px', border: 'none', borderRadius: '25px' }} />
                      <Card.Body>
                        <Card.Title style={{ color: '#ffffff', textAlign: 'left' }}> Sushin Shyam </Card.Title>
                        <Card.Text style={{ color: '#818682', textAlign: 'left' }}>
                          Artist
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#202420', width: '100%', border: 'none' }}>
                    <Card className='d-flex flex-row justify-content-start align-items-center' style={{ width: '100%', backgroundColor: '#202420', border: 'none' }}>
                      <Card.Img src="https://1.bp.blogspot.com/-9TjyOwMUCPY/XXxwdOQh6FI/AAAAAAAACRg/uX5YPhI2Sko23uqHv1SU3e8_Ph2q-GeDgCLcBGAsYHQ/s1600/ks%2Bharisankar.jpg" style={{ width: '50px', height: '50px', border: 'none', borderRadius: '25px' }} />
                      <Card.Body>
                        <Card.Title style={{ color: '#ffffff', textAlign: 'left' }}> KS Harishankar </Card.Title>
                        <Card.Text style={{ color: '#818682', textAlign: 'left' }}>
                          Artist
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 rounded  p-2" style={{ backgroundColor: 'black'}}> 
          <Second />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
