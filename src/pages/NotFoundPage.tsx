import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <>
      <div >
        <p >
          Страница не найдена
        </p>
        <Link to="/">
          На главную
        </Link>
      </div>
    </>
  );
}
