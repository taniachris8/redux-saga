type ErrorProps = {
  repeatFetchRequest: () => void;
};

export function Error({ repeatFetchRequest }: ErrorProps) {
  return (
    <>
      <div className="error-container">
        <div className="error-message">Произошла ошибка!</div>
        <button onClick={repeatFetchRequest} className="error-btn">
          Повторить запрос
        </button>
      </div>
    </>
  );
}
