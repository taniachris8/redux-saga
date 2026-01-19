import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsRequired } from "../state/detailsSlice";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import type { RootState } from "../state/store";

export function ServicePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getDetailsRequired(id));
    }
  }, [id, dispatch]);

  const details = useSelector((state: RootState) => state.details);

  const repeatFetchRequest = () => {
    if (id) {
      dispatch(getDetailsRequired(id));
    }
  };

  return (
    <>
      <div className="details-container">
        {details.status === "loading" && <Loader />}
        {details.status === "failed" && (
          <Error repeatFetchRequest={repeatFetchRequest} />
        )}
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
