
import "../styles/about.css";

const About = () =>{

    return (
      <>
        <div className="about-section">
          <h1>About Us Page</h1>
          <h3>Easy Shopping Experience</h3>
          <p>
            Welcome to ShopEazy, your number one source for Home Appliances.
            We're dedicated to providing you the very best Appliances, Founded
            in 2021 , ShopEazy has come a long way from its beginnings in All
            Over Country. We hope you enjoy our products as much as we enjoy
            offering them to you. If you have any questions or comments, please
            don't hesitate to contact us.
          </p>
        </div>

        <h2>Our Team</h2>

        <div class="row">
          <div class="col-3">
            <div className="card">
              <div className="container">
                <h2>Suraj Gaikwad</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem.</p>
                <p>gaikwad.suraj9634@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div className="card">
              <div className="container">
                <h2>Omprakash Jadhav</h2>
                <p className="title">Director General</p>
                <p>Some text that describes me lorem.</p>
                <p>omprakashjadhav2323@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </>
    );
};

export default About