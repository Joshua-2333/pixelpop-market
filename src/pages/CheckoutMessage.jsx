import { useNavigate } from "react-router-dom";

function CheckoutMessage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
      }}
    >
      <h2>That is all for PixelPop Market Demo</h2>
      <p>Thank you for checking out our demo!</p>
      <button
        onClick={goHome}
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.2s, transform 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default CheckoutMessage;
