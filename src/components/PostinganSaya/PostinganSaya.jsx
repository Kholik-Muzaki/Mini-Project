import React, { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPostedDestinations } from "../../Store/getDestinationSliceByPost/getDestinationSliceByPost";
import { fetchGetPostedDestinations } from "../../Store/getDestinationSliceByPost/getDestinationSliceByPost";

function PostinganSaya() {
  const statePostedDestinations = useSelector(selectPostedDestinations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetPostedDestinations());
  }, [dispatch]);

  if (statePostedDestinations.status === "loading") {
    return (
      <div className="loading-indicator d-flex justify-content-center">
        <ThreeCircles
          height={100}
          width={100}
          color="blue"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }

  if (statePostedDestinations.status === "failed") {
    return (
      <div>
        <p>Terjadi kesalahan:</p>
        <p>{statePostedDestinations.message}</p>
      </div>
    );
  }

  if (statePostedDestinations.status === "success") {
    return (
      <div className="container">
        <div className="row">
          {statePostedDestinations.data.map((destination) => (
            <div className="col-3" key={destination.id}>
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img src={destination.foto} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-center fw-bold">{destination.judul}</p>
                  <div className="row mb-3">
                    <div className="col">
                      <Link to={`/detailwisata/${destination.id}`}>
                        <button type="button" className="btn btn-outline-primary text-center" style={{ width: "100%" }}>
                          Lihat Detail
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <Link to={`/edit/${destination.id}`}>
                        <button type="button" className="btn btn-outline-success text-center" style={{ width: "100%" }}>
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <Link to={`/delete/${destination.id}`}>
                        <button type="button" className="btn btn-outline-danger text-center" style={{ width: "100%" }}>
                          Hapus
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export default PostinganSaya;
