
import './App.css'
import logo from '/Imges/Logo.png'

function App() {

  return (
    <>
     {/*nav start  */}
     <nav>
      <div className="container">
        <div className="flex">
          <div className="left">
           <img src={logo} alt="logo" />
            <div className="item">
              <ul>
                <li><a href="nav">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#">Sermon</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
          <a className='right' href="#">Contact us</a>
        </div>
      </div>
     </nav>
     {/*nav end */}
     {/* banner start */}
     <section id='banner'>
      <div className="container">
        <div className="text">
          <h5>Welcome to our CHURCH</h5>
          <h1>Become a part of our community</h1>
          <a href="" className="btn banerbtn">Learn more</a>
          <div className="bannerlast">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          </div>
        </div>
      </div>
     </section>
     {/* banner end */}
     {/* about start */} 
     <section id="about">
      <div className="container">
      <div className="text">
          <p>sub-headline</p>
          <h1>a church that's relevant</h1>
        </div>
        <div className="flex">
          <div className="box">
            <img src="/Imges/hand.svg" alt="icon" />
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="box">
            <img src="/Imges/Shape.svg" alt="shape" />
            <h2>Get involved</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="box">
            <img src="/Imges/handlove.svg" alt="" />
            <h2>Giving back</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
     </section>
     {/* about end */} 
     {/* lovestart  */}
     <section id="love">
      <div className="container">
      <div className="text">
          <h5>sub-headline</h5>
          <h1>
          SUB-HEADLINE
           love and compassion
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
           <a href="#" className='btn lovebtn'>Read more</a> 
        </div>
        <div className="flex">
          <div className="box">
            <img src="/Imges/boyspary.png" alt="pary" />
          </div>
          <div className="box box2">
            
            <img src="/Imges/boys gril pary.png" alt="pary" />
          </div>
          <div className="box">
            <img src="/Imges/old.png" alt="pary" />
          </div>
        </div>
        <div className="last">
          <h4>
          our mission & vision
          </h4>
          <h3>
          celebrate WITH US
          </h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">Read More <img src="/Imges/left.svg" alt="" /></a>
        </div>
      </div>
     </section>
     {/* love end */}
     {/* join start */}
     <section id="join">
      <div className="container">
        <div className="text">
          <h3>Watch and listen</h3>
          <h1>THE benefits of joining our church</h1>
        </div>
        <div className="flex_card">
        <div className="card">
          <img src="/Imges/aim.png" alt="img" />
          <div className="lear">
           <h2>
           WATCH AND LISTEN TO OUR SERMONS
           </h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
           </p>
          </div>
        </div>
        <div className="card">
          <img src="/Imges/book.png" alt="img" />
          <div className="lear">
           <h2>
           WATCH AND LISTEN TO OUR SERMONS
           </h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
           </p>
          </div>
        </div>
        <div className="card">
          <img src="/Imges/manbook.png" alt="img" />
          <div className="lear">
           <h2>
           WATCH AND LISTEN TO OUR SERMONS
           </h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
           </p>
          </div>
        </div>
        <div className="card">
          <img src="/Imges/pedri.png" alt="img" />
          <div className="lear">
           <h2>
           WATCH AND LISTEN TO OUR SERMONS
           </h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
           </p>
         
          </div>
        </div>
        </div>
      </div>
     </section>
     {/* join end */}
     {/* semons start */}
     <section id="semon">
      <div className="container">
        <div className="text">
          <h6>Upcoming SERMONS</h6>
          <h2>
          join us and become part of something great
          </h2>
        </div>
        <div className="flex">
          <div className="left">
            <h5>Upcoming Event</h5>
            <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className="one">
           {/* <img src="../public/Imges/Clock icon.png" alt="clockicon" /> */}
           <i className="fa-regular fa-clock"></i><h4>Friday 23:39 IST Saturday 11:20 ISD</h4>
           
           </div>
           <div className="two">
           <i className="fa-solid fa-venus"></i>
         <h4>No 233 Main St. New York, United States</h4>
           </div>
           <a href="" className="btn sembtn">Learn more</a>
          </div>
          <div className="right">
            <img src="/Imges/boygirl.jpg" alt="img" />
          </div>
        </div>
        <div className="last">
          <a href="#">View all Sermons  <i className="fa-solid fa-arrow-right-long"></i> </a>
        </div>
      </div>
     </section>
     {/* end */}
     <section id="we">
      <div className="container">
        <div className="flex">
          <div className="left">
            <h2>
            We want to serve the world around us
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <a href="" className="btn  webtn">
            Visit
            </a>
          </div>
          <div className="right">
            <img src="/Imges/Quote icon.png" alt="" />
          </div>
        </div>
      </div>
     </section>
     {/* we end */}
     {/* share start */}
     <section id="share">
      <div className="container">
        <div className="text">
          <h6>
          Read our Blog
          </h6>
          <h4>
          SHARE, INSPIRE, INNOVATE
          </h4>
        </div>
        <div className="flex">
          <div className="box">
            <h4>Relationship</h4>
            <h2> 
            WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <h5>
            By Mathew Johnson
            </h5>
            <h5>
            Tuesday 13 May, 2021
            </h5>
          </div>
          <div className="box">
            <h4>Relationship</h4>
            <h2> 
            WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <h5>
            By Mathew Johnson
            </h5>
            <h5>
            Tuesday 13 May, 2021
            </h5>
          </div>
          <div className="box">
            <h4>Relationship</h4>
            <h2> 
            WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <h5>
            By Mathew Johnson
            </h5>
            <h5>
            Tuesday 13 May, 2021
            </h5>
          </div>
          <div className="box">
            <h4>Relationship</h4>
            <h2> 
            WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <h5>
            By Mathew Johnson
            </h5>
            <h5>
            Tuesday 13 May, 2021
            </h5>


          </div>
        </div>
      </div>
     </section>
     {/* share end */}
     {/* footer start */}
     <footer>
      <div className="container">
        <div className="flex">
          <div className="one">
            <img src="/Imges/last.png" alt="" />
            <p className='fast'>
            © Copyright Nadim 2022
            </p>
            <p>(+8801622548197)</p>
            <p>4517 Washington Ave. </p>
            <p className='last'>nadim0835@gmail.com</p>
          </div>
          <div className="two">
            <h4>
            Quicklinks
            </h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Sermons</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="three">
            <h4>Connect </h4>
            
            <div className="icon">
            <a href="#">
            <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
              <i className="fa-brands fa-twitter"></i>
              </a>
             <a href="#">
             <i className="fa-brands fa-linkedin"></i>
             </a>
            </div>
          </div>
          <div className="four">
            <h1>
            Subscribe to get Latest Updates and News
            </h1>
            <div className="input">
              <input type="text" placeholder='Yourmail@gmail.com' />
              <a href="#" className='footerbtn btn'>Subscribe</a>
            </div>
          </div>
        </div>

      </div>
     </footer>
     {/* footer end */}
    </>
  )
}

export default App
