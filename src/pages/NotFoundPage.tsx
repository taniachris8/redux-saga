import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <>
      <div className="not-found-page-container">
        <p>Страница не найдена</p>
        <Link to="/">На главную</Link>
      </div>
    </>
  );
}
