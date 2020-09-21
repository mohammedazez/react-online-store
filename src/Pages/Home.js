import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { MDBIcon, MDBContainer, MDBBtn, MDBCol } from "mdbreact";
import "./Home.css";

function Home() {
  return (
    <Fragment>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://cdn.collider.com/wp-content/uploads/2010/06/inception_movie_poster_banner_04.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/25/51/c9/2551c90a1302f1602621948406ba3edf.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ebayimg.com/images/g/W7sAAOSwKINdexUK/s-l400.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-kategori">
        <MDBContainer>
          <h1>Kategori film terfavorit</h1>
          <MDBBtn social="fb">
            <MDBIcon icon="video" className="pr-1" /> Indonesia
          </MDBBtn>
          <MDBBtn social="tw">
            <MDBIcon icon="video" className="pr-1" /> Anime
          </MDBBtn>
          <MDBBtn social="gplus">
            <MDBIcon icon="video" className="pr-1" /> Drama
          </MDBBtn>
          <MDBBtn social="li">
            <MDBIcon icon="video" className="pr-1" /> Komedi
          </MDBBtn>
          <MDBBtn social="ins">
            <MDBIcon icon="video" className="pr-1" /> Action
          </MDBBtn>
          <MDBBtn social="pin">
            <MDBIcon icon="video" className="pr-1" /> Romantis
          </MDBBtn>
          <MDBBtn social="yt">
            <MDBIcon icon="video" className="pr-1" /> Hollywood
          </MDBBtn>
          <MDBBtn social="vk">
            <MDBIcon icon="video" className="pr-1" /> internasional
          </MDBBtn>
          <MDBBtn social="so">
            <MDBIcon icon="video" className="pr-1" /> Horror
          </MDBBtn>
          <MDBBtn social="slack">
            <MDBIcon icon="video" className="pr-1" /> Sport
          </MDBBtn>
          <MDBBtn social="git">
            <MDBIcon icon="video" className="pr-1" /> Entertainment
          </MDBBtn>
          <MDBBtn social="comm">
            <MDBIcon icon="video" className="pr-1" /> Dokumenter
          </MDBBtn>
          <MDBBtn social="email">
            <MDBIcon icon="video" className="pr-1" /> Perang
          </MDBBtn>
          <MDBBtn social="dribbble">
            <MDBIcon icon="video" className="pr-1" /> Bollywood
          </MDBBtn>
        </MDBContainer>
      </div>
      <div className="container-cari">
        {" "}
        <MDBCol className="posisi-cari" md="6">
          <h1>Cari Film</h1>
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
              <span
                className="input-group-text purple lighten-3"
                id="basic-text1"
              >
                <MDBIcon className="text-white" icon="search" />
              </span>
            </div>
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </MDBCol>
      </div>
    </Fragment>
  );
}

export default Home;
