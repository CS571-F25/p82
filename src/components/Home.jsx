export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h1>Artur Sobol</h1>
        <p style={{ opacity: 0.8 }}>CS @ UW–Madison</p>
        <p style={{ fontSize: 14, opacity: 0.7 }}>
          Welcome to my personal website!
        </p>
      </div>
    </main>
  );
}