import BusinessCard from "./BusinessCard";

function BusinessCardGallery({ data }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Business Cards !</h1>
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {data.map((data) => (
          <BusinessCard key={data.personalInfo.name} data={data} />
        ))}
      </div>
    </>
  );
}

export default BusinessCardGallery;
