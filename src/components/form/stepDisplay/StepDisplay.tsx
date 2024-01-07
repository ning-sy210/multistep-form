import { useAtomValue } from "jotai";

import { stepAtom } from "../Form.atoms";
import { steps } from "../Form.constants";

import DesktopSidebarBgImg from "/images/bg-sidebar-desktop.svg";

import "./StepDisplay.scss";

const StepDisplay = () => {
  const currStep = useAtomValue(stepAtom);

  return (
    <div className="hc step-display">
      <img
        src={DesktopSidebarBgImg}
        title="desktop sidebar background image"
        className="desktop-sidebar-bg-img"
      />

      <div className="flex steps-ctn">
        {steps.map((step, i) => {
          const index = i + 1;
          return (
            <div key={index} className="flex step">
              <div
                className={`hvc step-bubble ${
                  index === currStep ? "selected" : ""
                }`}
              >
                {index}
              </div>

              <div className="stack-sb step-text">
                <p className="step-counter-text">Step {index}</p>
                <p className="step-label">{step.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepDisplay;
