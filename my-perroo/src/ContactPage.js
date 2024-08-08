import "./App.css";
import dog from 'C:/Users/hello/Downloads/WEB DEV/REACT/myperro/my-perroo/src/dog1.png';

function ContactPage() {
  return (
    <>
      <div className="box1 d-flex">
        <div className="dogimage">
          <img src={dog} alt="dogimage" />
        </div>
        <div className="Headingg">
          <p>
            <h1>Hey this is</h1>
            <span>
              <h1>Perro</h1>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
