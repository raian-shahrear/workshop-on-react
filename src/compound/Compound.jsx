import Toggle from "./Toggle";

const Compound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1>Compound pattern in React 19</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <Toggle>
          <Toggle.Active>Active</Toggle.Active>
          <Toggle.Inactive>Inactive</Toggle.Inactive>
          <Toggle.Trigger></Toggle.Trigger>
        </Toggle>
      </div>
    </div>
  );
};

export default Compound;
