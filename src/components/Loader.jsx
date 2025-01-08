import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: window.innerWidth < 768 ? "column" : "row", // Responsive design
      }}
    >
      {/* Loader */}
      <div
        className="canvas-loader"
        style={{
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #ebb7ed",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          animation: "spin 1.5s linear infinite",
        }}
      />
      
      {/* Progress Bar */}
      <div
        style={{
          width: "100px",
          height: "10px",
          backgroundColor: "#f1f1f1",
          borderRadius: "5px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${progress.toFixed(2)}%`,
            height: "100%",
            backgroundColor: "#ebb7ed",
          }}
        />
      </div>

      {/* Progress Text */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 10,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
