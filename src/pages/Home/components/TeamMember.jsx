import _ from "lodash";
import React from "react";
import TeamMemberStyle from "../styles/TeamMember.style";

function TeamMember() {
  const CLIENT_REVIEW = [
    {
      id: 1,
      image: require("../assets/happyClient.png"),
      count: "50M",
      text: "Happy Clients",
    },
    {
      id: 2,
      image: require("../assets/TeamMember.png"),
      count: "100+",
      text: "Team Member",
    },
    {
      id: 3,
      image: require("../assets/WinnerAward.png"),
      count: "30+",
      text: "Winner Award",
    },
    {
      id: 4,
      image: require("../assets/DeliverResult.png"),
      count: "35M",
      text: "Deliver Result",
    },
  ];

  const TEAM_MEMBER = [
    {
      id: 1,
      image: require("../assets/TMfirstProfile.jpg"),
      name: "Bablu",
      work: "Manager & web developer",
    },
    {
      id: 2,
      image: require("../assets/TMfirstProfile.jpg"),
      name: "Gaurav Negi",
      work: "Sr Web developer",
    },
    {
      id: 3,
      image: require("../assets/TMfirstProfile.jpg"),
      name: "Gaurav Bhatt",
      work: "Sr Web developer",
    },
    {
      id: 4,
      image: require("../assets/TMfirstProfile.jpg"),
      name: "Rakesh",
      work: "Web developer",
    },
    {
      id: 5,
      image: require("../assets/TMfirstProfile.jpg"),
      name: "Jaswant",
      work: "Web developer",
    },
  ];

  return (
    <TeamMemberStyle>
      <div className="mainTeamMember_class">
        <div className="ourPricing">
          <div className="container">
            <div className="contain_video">
              <div className="ct-video-player ct-video-style1">
                <div className="ct-video-box text-center">
                  <a
                    className="ct-video-button  style1"
                    href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <span className="ct-video-text el-empty"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="preparing_class">
              <h3 className="text-center">
                Preparing For Your Success <br /> Provide Best IT Solutions
              </h3>
            </div>
            <div className="specific_class">
              <p className="text-center">
                Appropriate for our specific business, makingit easy for <br />{" "}
                you to have quality IT services.
              </p>
            </div>
            <div className="action_button text-center">
              <button className="btn btn_purple">Our Pricing</button>
            </div>
          </div>
        </div>
        <div className="clientReview">
          {_.map(CLIENT_REVIEW, ({ image, count, text, id }) => (
            <div className="small_box" key={id}>
              <img src={image} />
              <div>
                <h3>{count}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="teamMember py-80">
          <div className="container">
            <div className="teamMember_title heading_head">
              <h3>
                <span>Team Member</span>
              </h3>
              <h2>
                Our Awesome <span className="color_purple">Technology</span>
                <br /> Team Member
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="card d-flex">
              {_.map(TEAM_MEMBER, (row) => (
                <div className="grid-item">
                  <div className="item--inner ">
                    <div className="item--holder">
                      <div className="item--image">
                        <a href="https://demo.casethemes.net/itfirm/team-details/">
                          <img
                            className="no-lazyload "
                            src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-team1-av-260x260.jpg"
                            width="260"
                            height="260"
                            alt="h3-team1-av"
                          />
                        </a>
                      </div>
                      <h4 className="item--title el-empty">{row?.name}</h4>
                      <div className="item--position el-empty">{row?.work}</div>
                      <a
                        className="item--details"
                        href="https://demo.casethemes.net/itfirm/team-details/"
                      >
                        <i>+</i>
                      </a>
                    </div>
                    <div className="item--holder-hover bg-image">
                      <div className="item--holder-inner">
                        <div className="item--desc el-empty">
                          Lead the team of passionate developers, designers and
                          the strategists with a thought.
                        </div>
                        <h4 className="item--title el-empty">
                          <a href="https://demo.casethemes.net/itfirm/team-details/">
                            {row?.name}
                          </a>
                        </h4>
                        <div className="item--position el-empty">
                          {row?.work}
                        </div>
                        <div className="item--social">
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <a
                          className="item--details btn btn-primary"
                          href="https://demo.casethemes.net/itfirm/team-details/"
                        >
                          Read More +
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="text-center">
              <button class="btn btn_blue">More Service +</button>
            </div>
          </div>
        </div>
      </div>
    </TeamMemberStyle>
  );
}

export default TeamMember;
