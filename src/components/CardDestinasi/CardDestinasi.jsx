import { fetchGetDestinations, selectDestinations } from "../../Store/getDestinationSlice/getDestinationSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { ThreeCircles } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import { fetchDeleteDestination } from "../../Store/deleteDestinationSlice/deleteDestinationSlice";
import notFoundImage from "../../assets/img/notFound.png";


function CardDestinasi() {
    const stateDestinations = useSelector(selectDestinations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetDestinations());
        
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this Destination?")) {
            dispatch(fetchDeleteDestination(id))
                .then(() => {
                    dispatch(fetchGetDestinations());
                });
        }
    };

    return (
        <>
            <div className="container">
                {stateDestinations.status === "loading" && (
                    <div className="loading-indicator d-flex justify-content-center">
                        <ThreeCircles
                            height="100"
                            width="100"
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
                )}

                {stateDestinations.status === "failed" && (
                    <div>
                        <p>Terjadi kesalahan:</p>
                        <p>{stateDestinations.message}</p>
                    </div>
                )}

                {stateDestinations.status === "success" && (
                    <div className="row d-flex justify-content-around mt-5">
                        {stateDestinations.data.map((destination) => (
                            <div
                                className="col-sm-6 col-md-4 col-lg-4 mb-5"
                                key={destination.id}
                                data-aos="fade-up"
                            >
                                <div className="card" style={{
                                    width: "18rem",
                                    height: "100%"
                                }}>
                                    <img
                                        src={destination.foto}
                                        className="card-img-top"
                                        alt="gambar tidak ditemukan"
                                        onError={(e) => {
                                            e.target.src = notFoundImage;
                                        }}
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center fw-bold">
                                            {destination.judul}
                                        </p>
                                        <Link to={`/detailwisata/${destination.id}`}>
                                            <button type="button" className="btn btn-outline-primary text-centermt-3" style={{
                                                width: "100%"
                                            }}>
                                                Lihat Detail
                                            </button>
                                        </Link>
                                        <Link to={`/updatepostingan/${destination.id}`}>
                                            <button type="button" className="btn btn-outline-success text-center mt-3" style={{
                                                width: "100%"
                                            }}>
                                                Edit
                                            </button>
                                        </Link>

                                        <button
                                            type="button"
                                            className="btn btn-outline-danger text-center mt-3"
                                            onClick={() => {
                                                handleDelete(destination.id);
                                            }}
                                            style={{
                                                width: "100%"
                                            }}>
                                            Hapus Destinasi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default CardDestinasi;
