import { Inter } from "next/font/google";
import Spotlight from "./components/spotlight";
import Table from "./components/table";
import Form from "./components/form";
import React, { useState, useMemo } from "react";
const inter = Inter({ subsets: ["latin"] });

enum STEPS {
  ENTRY = 0,
  STEP1 = 1,
  STEP2 = 2,
}

export default function Home() {
  const [step, setStep] = useState(STEPS.ENTRY);
  const [showSpotlight, setShowSpotlight] = useState(true);

  const onNext = () => {
    setStep((value) => value + 1);
    if (step === STEPS.STEP2) {
      setShowSpotlight(false);
      setStep(STEPS.ENTRY);
    }
  };

  const onClickClose = () => {
    setShowSpotlight(false);
  };

  const _title = useMemo<string>(() => {
    if (step === STEPS.ENTRY) {
      return "Welcome to the page!";
    }
    if (step === STEPS.STEP1) {
      return "This ia a table";
    }
    if (step === STEPS.STEP2) {
      return "Almost there!";
    }
    throw new Error("Invalid step value");
  }, [step]);

  const _message = useMemo<string>(() => {
    if (step === STEPS.ENTRY) {
      return "Too much to read? Don't worry, we can go through this together.";
    }
    if (step === STEPS.STEP1) {
      return "Find what you need from this table. If you want to reach out to support, try referring what you want to know from the table.";
    }
    if (step === STEPS.STEP2) {
      return "That's it! Click Submit button when you are ready!";
    }
    throw new Error("Invalid step value");
  }, [step]);

  const _buttonName = useMemo<string>(() => {
    if (step === STEPS.ENTRY) {
      return "Explore";
    }
    if (step === STEPS.STEP1) {
      return "Next";
    }
    if (step === STEPS.STEP2) {
      return "Got it";
    }
    throw new Error("Invalid step value");
  }, [step]);

  const _position = useMemo<string>(() => {
    if (step === STEPS.ENTRY) {
      return "sm:top-5 sm:left-14 lg:left-1/4 2xl:left-1/3";
    }
    if (step === STEPS.STEP1) {
      return "sm:top-[300px] sm:right-5 lg:left-1/4 2xl:top-[200px] 2xl:left-1/3";
    }
    if (step === STEPS.STEP2) {
      return "sm:top-[820px] sm:left-10 md:top-[800px] md:left-1/4 lg:top-[650px] xl:top-[600px]";
    }
    throw new Error("Invalid step value");
  }, [step]);

  return (
    <div className={`p-10 h-screen`}>
      <div className="h-[1000px]">
        {showSpotlight && (
          <Spotlight
            title={_title}
            message={_message}
            buttonName={_buttonName}
            onClick={onNext}
            onClickClose={onClickClose}
            position={_position}
          />
        )}

        <div className="grid justify-end">
          <span
            className="material-icons nsw-material-icons nsw-material-icons--info "
            aria-hidden="true"
            onClick={() => {
              setShowSpotlight(true);
            }}
          >
            info
          </span>
        </div>

        <Table />
        <Form />
      </div>
    </div>
  );
}
