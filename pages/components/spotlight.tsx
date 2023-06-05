interface SpotlightProps {
  title: string;
  message: string;
  buttonName: string;
  onClick: () => void;
  onClickClose: () => void;
  position: string;
}

const Spotlight = ({
  title,
  message,
  buttonName,
  onClick,
  onClickClose,
  position,
}: SpotlightProps) => {
  return (
    <div className="flex fixed inset-0 z-50 bg-neutral-500/50">
      <div className={`absolute max-w-[600px] ${position}`}>
        <div className="nsw-grid">
          <div className="nsw-card nsw-card--headline hover:text-white z-1 w-full">
            <div className="nsw-card__content z-1">
              <div className="nsw-card__title">
                <a>{title}</a>

                <p className="text-base">{message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {" "}
          <button
            type="button"
            className="
              nsw-button nsw-button--dark-outline-solid mt-2 w-min place-self-end col-start-3 col-end-4
              "
            onClick={onClickClose}
          >
            Close
          </button>
          <button
            type="button"
            className="
              nsw-button nsw-button--dark-outline-solid mt-2 w-min place-self-end col-start-4 col-end-5
              "
            onClick={onClick}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
