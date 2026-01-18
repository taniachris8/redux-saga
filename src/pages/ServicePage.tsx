import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../state/detailsSlice";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";

export function ServicePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchDetails(id));
    }
  }, [id]);

  const details = useSelector((state) => state.details);
  console.log("details from Details Page", details);

  return (
    <>
      <div className="details-container">
        {details.status === "loading" && <Loader />}
        {details.status === "failed" && <Error />}
        {details.status === "succeeded" && details.data && (
          <>
            <p className="details-name">{details.data.name}</p>
            <p className="details-content">Описание: {details.data.content}</p>
            <p className="details-price">Цена: {details.data.price} руб.</p>
          </>
        )}
      </div>
    </>
  );
}
