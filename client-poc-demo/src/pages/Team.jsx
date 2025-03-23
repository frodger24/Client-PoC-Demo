import React, { useState, useRef, useEffect } from "react";
import { FaLongArrowAltRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Layout from "./Styling/Layout";
import "./Home.css";
import "./Team.css";

const Team = () => {
  const scrollRef = useRef(null);
  const [popupData, setPopupData] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const slideWidth =
        scrollRef.current.firstElementChild.getBoundingClientRect().width;
      const currentIndex = Math.round(
        scrollRef.current.scrollLeft / slideWidth
      );
      const prevIndex = currentIndex - 1;
      scrollRef.current.scrollTo({
        left: prevIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const slideWidth =
        scrollRef.current.firstElementChild.getBoundingClientRect().width;
      const currentIndex = Math.round(
        scrollRef.current.scrollLeft / slideWidth
      );
      const nextIndex = currentIndex + 1;
      scrollRef.current.scrollTo({
        left: nextIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPopupData(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTileClick = (data) => {
    setPopupData(data);
  };

  const departments = [
    {
      title: "Department A",
      members: [
        "Member A1",
        "Member A2",
        "Member A3",
        "Member A4",
        "Member A5",
        "Member A6",
      ],
    },
    {
      title: "Department B",
      members: ["Member B1", "Member B2", "Member B3"],
    },
    {
      title: "Department C",
      members: [
        "Member C1",
        "Member C2",
        "Member C3",
        "Member C4",
        "Member C5",
        "Member C6",
        "Member C7",
        "Member C8",
        "Member C9",
        "Member C10",
        "Member C11",
        "Member C12",
        "Member C13",
      ],
    },
    {
      title: "Department D",
      members: [
        "Member D1",
        "Member D2",
        "Member D3",
        "Member D4",
        "Member D5",
        "Member D6",
        "Member D7",
        "Member D8",
        "Member D9",
        "Member D10",
        "Member D11",
        "Member D12",
        "Member D13",
        "Member D14",
        "Member D15",
      ],
    },
  ];

  return (
    <Layout>
      <div className="team-section">
        <h1 className="team-title">Our Team</h1>
        <div className="team-float">
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Team Member 1",
                role: "Team Member",
                image: `${
                  import.meta.env.BASE_URL
                }demo/assets/images/demo-profile1.jpg`,
                description:
                  "This is a placeholder profile for Team Member 1. It serves as an example in this proof-of-concept project.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }demo/assets/images/demo-profile1.jpg`}
              className="team-pic"
              alt="Team Member 1"
            />
            <h2 className="name-title">Team Member 1</h2>
            <h1 className="job-title">Team Member</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Team Member 2",
                role: "Team Member",
                image: `${
                  import.meta.env.BASE_URL
                }demo/assets/images/demo-profile2.jpg`,
                description:
                  "This is a placeholder profile for Team Member 2. It serves as an example in this proof-of-concept project.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }demo/assets/images/demo-profile2.jpg`}
              className="team-pic"
              alt="Team Member 2"
            />
            <h2 className="name-title">Team Member 2</h2>
            <h1 className="job-title">Team Member</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Team Member 3",
                role: "Team Member",
                image: `${
                  import.meta.env.BASE_URL
                }demo/assets/images/demo-profile3.jpg`,
                description:
                  "This is a placeholder profile for Team Member 3. It serves as an example in this proof-of-concept project.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }demo/assets/images/demo-profile3.jpg`}
              className="team-pic"
              alt="Team Member 3"
            />
            <h2 className="name-title">Team Member 3</h2>
            <h1 className="job-title">Team Member</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Team Member 4",
                role: "Team Member",
                image: `${
                  import.meta.env.BASE_URL
                }demo/assets/images/demo-profile4.jpg`,
                description:
                  "This is a placeholder profile for Team Member 4. It serves as an example in this proof-of-concept project.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }demo/assets/images/demo-profile4.jpg`}
              className="team-pic"
              alt="Team Member 4"
            />
            <h2 className="name-title">Team Member 4</h2>
            <h1 className="job-title">Team Member</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Team Member 5",
                role: "Team Member",
                image: `${
                  import.meta.env.BASE_URL
                }demo/assets/images/demo-profile5.jpg`,
                description:
                  "This is a placeholder profile for Team Member 5. It serves as an example in this proof-of-concept project.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }demo/assets/images/demo-profile5.jpg`}
              className="team-pic"
              alt="Team Member 5"
            />
            <h2 className="name-title">Team Member 5</h2>
            <h1 className="job-title">Team Member</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
        </div>
      </div>

      <img
        className="home-pic"
        src={`${import.meta.env.BASE_URL}demo/assets/images/homepage-image.jpg`}
        alt="Demo content"
      />

      {popupData && (
        <div className="modal-overlay" onClick={() => setPopupData(null)}>
          <div
            className="modal-content"
            onClick={(e) => {
              if (window.innerWidth <= 480) {
                setPopupData(null);
              } else {
                e.stopPropagation();
              }
            }}
          >
            <img
              src={popupData.image}
              alt={popupData.name}
              className="popup-img"
            />
            <h2>{popupData.name}</h2>
            <h3>{popupData.role}</h3>
            <p>{popupData.description}</p>
          </div>
        </div>
      )}

      <div className="provider-section">
        <h2 className="prov-title">Our Providers</h2>
        <div className="provider-container">
          <button className="arrow-btn prev-arrow" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <div className="provider-sec" ref={scrollRef}>
            {departments.map((dept, dIndex) => (
              <div className="table-container" key={dIndex}>
                <h3>{dept.title}</h3>
                <table className="provider-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dept.members.map((member, mIndex) => (
                      <tr key={mIndex}>
                        <td>{member}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <button className="arrow-btn next-arrow" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
