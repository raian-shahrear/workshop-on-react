import { createContext, useState, use } from "react";

const ToggleContext = createContext(null);

const Toggle = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <ToggleContext value={{ active, setActive }}>{children}</ToggleContext>
  );
};

const TriggerButton = () => {
  const { active, setActive } = use(ToggleContext);
  return <input type="checkbox" onChange={() => setActive(!active)} />;
};
const ToggleActive = ({ children }) => {
  const { active } = use(ToggleContext);
  return active ? children : null;
};
const ToggleInactive = ({ children }) => {
  const { active } = use(ToggleContext);
  return !active ? children : null;
};

Toggle.Trigger = TriggerButton;
Toggle.Active = ToggleActive;
Toggle.Inactive = ToggleInactive;

export default Toggle;
