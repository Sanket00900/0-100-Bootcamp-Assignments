import React from "react";
import PropTypes from "prop-types";

function BusinessCard({ data }) {
  const { personalInfo, socialMedia, interests } = data;
  console.log(data);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid #000",
          padding: "16px",
          borderRadius: "8px",
          marginBottom: "10px",
          background: "#ebebeb",
        }}
      >
        <h1>{personalInfo.name}</h1>
        <p>{personalInfo.description}</p>
        <h2>Interests</h2>
        <ul>
          {interests.map((interest) => (
            <li>{interest}</li>
          ))}
        </ul>
        <h3>Social Media handles</h3>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            padding: "0",
            gap: "8px",
          }}
        >
          {Object.entries(socialMedia).map(([platform, link]) => (
            <li key={platform}>
              <button
                style={{
                  border: "none",
                  background: "blue",
                  padding: "10px",
                  borderRadius: "5px",
                  color: " white",
                }}
                href={link}
              >
                {platform}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

BusinessCard.propTypes = {};

export default BusinessCard;
