import React from "react";
import Footer from "./layout/Footer";
import { MenuItem, Select } from "@mui/material";
import { size } from "lodash";

const Landing = () => {
  return (
    <div
      style={{
        display: "block",
        padding: "0px",
        width: "100%",
      }}
    >
      {/* <div class="bg-secondary text-light ">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 mb-md-0 text-warning">
              Register to access the papers
            </h3>
          </div>
        </div>
      </div> */}

      <div id="About" class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img
                src="https://i.ibb.co/6Ny57YK/uni-3-1024x576.png"
                class="img-fluid"
                alt="Pulchowk Campus"
                height={600}
                width={600}
                padding="10px"
              />
              <br />
              <br />
              <br />
              <img
                src="https://i.ibb.co/pR2vC7T/Pulchowk.png"
                class="img-fluid"
                alt="Pulchowk Campus"
                height={600}
                width={600}
              />
            </div>
            <div class="col-md p-5">
              <h2>Pulchowk Campus Research Repository</h2>
              <h5>Repository of Researchers of IOE, Pulchowk Campus</h5>
              <p
                class="lead"
                style={{
                  fontSize: "16px",
                }}
              >
                Faculty publication management system is an integrated web
                application software that allows administrators to effectively
                manage all the faculty publications from record keeping to
                publication data analytics and visualization. Faculty evaluation
                system is also a part of the system that allows administrators
                to evaluate faculty members, lecturers and professors. Due to
                absence of a unified faculty publication management system,
                research publications of faculty members were spread across
                various research publication sites like GoogleScholar,
                ReserachGate, IEEE, etc and it became a tedious task for
                administrators to keep track of publications and generate
                associated reports for administrative purposes.
                <br /> <br /> Our system scrapes all the relevant data from such
                websites and presents user with a unified system to add, edit,
                approve, search, sort and generate reports of such publications
                as per faculty members or departments. The system additionally
                allows a user to perform data analytics and visualizations with
                bar chart and pie chart of research publications across faculty
                members and even specific departments. Later, the system uses
                the publication data of faculty members along with other
                evaluation metrics like years of service and objective feedback
                form data provided by students for evaluation of the user.
              </p>
              <a href="http://pcampus.edu.np/" class="btn btn-light mt-3">
                <i class="bi bi-chevron-right"></i>Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 
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
        </div> */}

      <div class="p-5">
        <div class="container">
          <h2 class="text-center mb-4">Frequently Asked Questions</h2>
          <div class="accordion accordion-flush" id="questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  What is the problem with traditional way of record keeping?
                </button>
              </h2>
              <div
                id="question-one"
                class="accordion-collapse collapse"
                data-bs-parent="questions"
              >
                <div class="accordion-body">
                  Till now, the administrators of the associated university have
                  to manually record or update the information from their
                  personal account. But such tasks have been heavily relied on
                  physical printed documents. This became a tedious task for the
                  administrative members. A new system design is needed to
                  automate those tedious manual tasks. <br />
                  Also, for the evaluation of faculty members, a new faculty
                  evaluation system is to be integrated. The limitation of
                  currently available system is that despite the availability of
                  the libraries and frameworks like Selenium, BeautifulSoup etc.
                  there is a lack of application tailored for the purpose of
                  tracking publication information using those scraping
                  frameworks.
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
                  What are the main objectives of this system?
                </button>
              </h2>
              <div
                id="question-two"
                class="accordion-collapse collapse"
                data-bs-parent="questions"
              >
                <div class="accordion-body">
                  Our primary objective is to develop a new record management
                  system with web scraping abilities to replace manual record
                  keeping tasks and integrate the faculty evaluation system.
                  <br />
                  The objectives of this project are:
                  <br />
                  1. To develop a system for record keeping of all papers of
                  faculty members present in Internet through web scraping with
                  feature of adding, searching, editing the papers, user
                  profiling and report generation.
                  <br />
                  2. To integrate a comprehensive faculty evaluation system to
                  provide a fair evaluation of faculty members through various
                  metrics.
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
                  What is the scope of this system?
                </button>
              </h2>
              <div
                id="question-three"
                class="accordion-collapse collapse"
                data-bs-parent="questions"
              >
                <div class="accordion-body">
                  The scope of the Faculty Publication Management is to provide
                  a comprehensive solution for managing and evaluating research
                  publications of faculty members in an academic institution.
                  The system provides a platform for record keeping of all the
                  publication works of the faculty members, a detailed analysis
                  and visualizations for tracking the researches and report
                  generation of either individual faculty member or department.
                  <br />
                  Also, the evaluation system is integrated for evaluating and
                  assessing the faculty members through their publication data
                  along with other evaluation metrics like years of service and
                  objective feedback form data provided by students for
                  evaluation of the courses taught by faculty members.
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
                  <span class="fw-bold">Location:</span> Pulchowk,Lalitpur
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Phone no:</span> 01-5543078
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
