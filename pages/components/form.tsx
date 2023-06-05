const Form = () => {
  return (
    <div className="grid nsw-form w-[300px]">
      <div className="nsw-form__group">
        <label className="nsw-form__label" htmlFor="form-text-1">
          Name
        </label>
        <input
          className="nsw-form__input"
          type="text"
          id="form-text-1"
          name="form-text-1"
        />
      </div>
      <div className="nsw-form__group">
        <label className="nsw-form__label" htmlFor="form-textarea-1">
          Comment
        </label>
        <textarea
          className="nsw-form__input"
          name="textarea"
          id="form-textarea-1"
        ></textarea>
      </div>
      <button
        type="button"
        className="nsw-button nsw-button--dark place-self-end mt-2"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
