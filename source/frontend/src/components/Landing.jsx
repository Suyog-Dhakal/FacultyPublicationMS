import React from "react";
import Footer from "./layout/Footer";

const Landing = () => {
  return (
    <div
      style={{
        display: "block",
        padding: "0px",
        width: "100%",
      }}
    >
      {/* <div
        className="container"
        style={{
          display: "inline",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "sans-serif",
          }}
        >
          Please login to access the system....
        </h1>
        <br />
        <h3>Features of this application are...</h3>
        <ul style={{ color: "black" }}>
          <li>Centralization of published research papers in popular sites </li>
          <li>Search for papers</li>
          <li>Edit paper details</li>
        </ul>
      </div>
      <Footer /> */}

      {/* <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
          <a href="#" class="navbar-brand">
            BE Routine Management
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#About" class="nav-link">
                  {" "}
                  About Us{" "}
                </a>
              </li>
              <li class="nav-item">
                <a href="#Contact" class="nav-link">
                  {" "}
                  Contact Us{" "}
                </a>
              </li>
              <li class="nav-item">
                <a href="#Login" class="nav-link">
                  {" "}
                  Login{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div class="bg-dark text-light  text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                <span class="text-warning">
                  Pulchowk Campus Research Repository
                </span>
              </h1>
              <p class="lead my-4">
                Repository of Researchers of IOE, Pulchowk Campus
              </p>
              {/* <button class="btn btn-primary btn-lg">View your Routine</button> */}
            </div>
            <img
              class="img-fluid w-50 d-none d-sm-block"
              src="./img/showcase.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="bg-primary text-light ">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 mb-md-0">Register to access the papers ...</h3>
          </div>
        </div>
      </div>

      <div class="p-5">
        <div class="container">
          <div class="row text-center">
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center g-4">
                  <div class="h1" mb-3>
                    <i class="bi bi-laptop"></i>
                  </div>
                  <h3 class="car-title mb-3">Virtual</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolore quisquam, libero ipsa reiciendis praesentium optio
                    odit doloremque cupiditate quia ratione temporibus tempore
                    fuga, laudantium error itaque vitae asperiores nemo tenetur.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h1" mb-3>
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="car-title mb-3">Hybrid</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolore quisquam, libero ipsa reiciendis praesentium optio
                    odit doloremque cupiditate quia ratione temporibus tempore
                    fuga, laudantium error itaque vitae asperiores nemo tenetur.
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1" mb-3>
                    <i class="bi bi-people"></i>
                  </div>
                  <h3 class="car-title mb-3">In person</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolore quisquam, libero ipsa reiciendis praesentium optio
                    odit doloremque cupiditate quia ratione temporibus tempore
                    fuga, laudantium error itaque vitae asperiores nemo tenetur.
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="About" class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src="./img/college.jpeg" class="img-fluid" alt="" />
            </div>
            <div class="col-md p-5">
              <h2>More About Pulchowk Campus</h2>
              <p class="lead">
                Pulchowk Campus offers bachelors courses, master’s courses, and
                Ph. D. programs in different areas of engineering. This campus
                is well equipped with necessary laboratories with great strength
                of faculties and staffs, separate buildings for academic and
                administrative purposes has become the center of excellence of
                engineering education in Nepal.
              </p>
              <a href="#" class="btn btn-light mt-3">
                <i class="bi bi-chevron-right"></i>Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="info" class="p-5 bg-dark text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h2>Bachelor</h2>
              <p class="lead">
                In each academic year Institute of Engineering (IOE) conducts
                entrance examination; only those candidate who passes the
                entrance examination are deemed eligible for the admission.
                These eligible candidates can get admitted to any of the
                constituent and affiliated colleges according to the admission
                process followed by the corresponding college. The admission
                process practiced by the constituent colleges is the same, but
                the process followed by the affiliated colleges may differ from
                one another. Each year IOE publishes an information brochure
                along with the announcement of entrance examination of that
                year. This book contains all the required information for an
                interested candidate to appear in the exam an finally get
                admitted to any of the constituent or affiliated colleges.
              </p>
              <a href="#" class="btn btn-light mt-3">
                <i class="bi bi-chevron-right"></i>Read More
              </a>
            </div>
            <div class="col-md">
              <img src="./img/bachelor.svg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="p-5">
        <div class="container">
          <h2 class="text-center mb-4">Frequently Asked Question</h2>
          <div class="accordion accordion-flush" id="questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  How effective is the managament system
                </button>
              </h2>
              <div
                id="question-one"
                class="accordion-collapse collapse"
                data-bs-parent="questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium possimus error magni nemo voluptates facere quis
                  nam adipisci dolor molestiae sed deleniti debitis, at
                  quibusdam quaerat aspernatur assumenda quas tenetur.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  what is the fee structure
                </button>
              </h2>
              <div
                id="question-two"
                class="accordion-collapse collapse"
                data-bs-parent="questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium possimus error magni nemo voluptates facere quis
                  nam adipisci dolor molestiae sed deleniti debitis, at
                  quibusdam quaerat aspernatur assumenda quas tenetur.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  what is the prerequisite for studying
                </button>
              </h2>
              <div
                id="question-three"
                class="accordion-collapse collapse"
                data-bs-parent="questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium possimus error magni nemo voluptates facere quis
                  nam adipisci dolor molestiae sed deleniti debitis, at
                  quibusdam quaerat aspernatur assumenda quas tenetur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-5" id="Contact">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <h2 class="text-center mb-4">Contact info</h2>
              <ul class="list-group list-group-flush lead">
                <li class="list-group-item">
                  <span class="fw-bold">Main Location:</span> Pulchowk,Lalitpur
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Phone no:</span> 01-5550000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer
        class="p-5 bg-dark text-white text-center position-relative"
        style={{
          width: "100%",
        }}
      >
        <div class="container">
          <p class="lead">
            Copyright &copy; 2023 Pulchowk Campus Research Repository
          </p>

          <a href="#/index" class="position-absolute bottom-0 end-0 p-5">
            <i class="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
