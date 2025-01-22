import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const divStyle = {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://explore.rehlat.ae/static/media/searchdestination/thingstodo/images/trivandrum/sree_padmanabhaswamy_temple/large_1280px-Thiruvananthapuram_Padmanabhaswamy_Temple.webp')",
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center 25%', // Moves the image down by 25%, showing the area between the top and middle
    height: '400px', // Adjust height as needed
    width: '100%', // Adjust width as needed
  };
  
  
  
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div style={divStyle}>
            <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '150px', fontSize: '65px' }}>
              Sree Padmanabhaswamy <br /> Temple
            </h1>
            <Link to={'/dashboard'} style={{ textDecoration: 'none',alignItems:'center',justifyContent:'center',display:'flex' }}><button className='btn border-light text-light' style={{ width: '100px', borderRadius: '20px'}}>Explore</button></Link>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-6'>
            <img src="https://static.toiimg.com/thumb/94357207/Sree-Padmanabhaswamy-temple.jpg?width=636&height=358&resize=4" alt="no image" style={{ borderRadius: 25 }} />
          </div>
          <div className='col-md-6 p-md-0 p-5'>
            <h3>Sree Padmanabha Swamy Temple</h3>
            <p style={{ textAlign: 'justify', marginTop: '5px' }}>Sree Padmanabha Swamy is the Tutelary Deity of the erstwhile ruling family of Travancore and the devotion of the Maharajas of Travancore and Royal Family to Sree Padmanabha Swamy is legendary stretching back centuries. <br /> <br />
              The Maharajas of Travancore and the Members of the Royal Family out of devotion to Sree Padmanabha Swamy had instituted many personal religious offerings (vazhipadoos) and functions, which do not form part of the mandatory rituals and rites of the Temple. After the end of the reign, the last Maharaja of Travancore Maharaja Sree Padmanabha Dasa Sree Chithira Thirunal Bala Rama Varma (H.H.Sir Rama Varma) continued to perform such religious offerings and functions, uninterruptedly in the Temple out of his income. <br /> <br />
              The Maharaja formed the Sree Padmanabha Swamy Temple Trust in 1965 for the perpetual continuance of the religious offerings and functions of the Royal Family. The Maharaja transferred certain personal land with buildings to the Trust to generate income for the fulfillment of the offerings and functions.</p>
          </div>
        </div>
        {/* card */}
        <div className="container mt-4">
          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <img src="https://static.wixstatic.com/media/6b7f0a_865129cdb59240918b6de66ae6c0db0d~mv2.jpeg/v1/fill/w_480,h_640,q_90/6b7f0a_865129cdb59240918b6de66ae6c0db0d~mv2.jpeg" alt="no image" style={{ width: '300px', height: '200px' }} />
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <h3>
                  Sree Vaikundom
                </h3>
                <p>Sree Vaikundom Kalyana Mandapam in Thiruvananthapuram Fort is one of the most sought after one banqueting facilities in the city.</p>
              </div>
            </div>
          </div>
          <div className="card " style={{ margin: '70px' }}>
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <img src="https://static.wixstatic.com/media/6b7f0a_cc25c753b3c0433598b04f51b5436661~mv2.jpeg/v1/crop/x_0,y_93,w_700,h_456/fill/w_531,h_346,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/7.jpeg" alt="no image" style={{ width: '300px', height: '200px' }} />
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <h3>
                  Ananthasayanam
                </h3>
                <p>Ananthasayanam Kalyana Mandapam in Thiruvananthapuram Fort is another prominent banquet hall within in the city.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <img src="https://static.wixstatic.com/media/6b7f0a_ee00f3fb20a747fa9e75c3fd3acda552~mv2.jpeg/v1/fill/w_541,h_353,fp_0.48_0.48,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpeg" alt="no image" style={{ width: '300px', height: '200px' }} />
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <h3>
                  Bhajanappura
                </h3>
                <p>It in Thiruvananthapuram Fort, is another salient Mandapams in trivandrum that serves customers from Thiruvananthapuram as well as from other parts of the state.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <img src="https://static.wixstatic.com/media/6b7f0a_b664215b3d2b486f85908ef0d61b35ac~mv2.jpeg/v1/fill/w_549,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1%20(1).jpeg" alt="no image" style={{ width: '300px', height: '200px' }} />
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <h3>
                  Mahalakshmi
                </h3>
                <p>Mahalakshmi Kalyanamandapam in Thiruvananthapuram Fort, is a top player in the category Kalyana Mandapams in Thiruvananthapuram.</p>
              </div>
            </div>
          </div>
          <div className="card " style={{ margin: '70px' }}>
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <img src="https://static.wixstatic.com/media/6b7f0a_cfd959a09fbb4f86994144f79b5fae0c~mv2.jpeg/v1/fill/w_609,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6.jpeg" alt="no image" style={{ width: '300px', height: '200px' }} />
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <h3>
                  Sree Uthradom Tirunal Marthanda Varma Chithralayam
                </h3>
                <p>A museum that offers a time-travel.Conceived by late his,the museum provides the public an authentic perspective on the culture of Travancore.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <img src="https://static.wixstatic.com/media/6b7f0a_7166b55d59f9416e8f620a62bfd56c87~mv2.jpg/v1/fill/w_609,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/kuthira1.jpg" alt="no image" style={{ width: '300px', height: '200px' }} />
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <h3>
                  Kuthiramalika
                </h3>
                <p>122 smiling wooden horses await, which means “palace of horses”. Formally known as Kuthiramalika Palace Museum or Puthenmalika Palace Museum, it is a pristine two-storied palace near the Sree Padmanabhaswamy Temple in trivandrum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home