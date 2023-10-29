// import Borobudur from "../../assets/img/BorobudurCard.jpeg"
// import DanauToba from "../../assets/img/DanauToba.jpg"
// import Keraton from "../../assets/img/Keraton.jpeg"
// import RajaAmpat from "../../assets/img/RajaAmpat.jpeg"
// import LabuanBajo from "../../assets/img/LabuanBajo.jpeg"
// import Pangandaran from "../../assets/img/Pangandaran.jpeg"
import { fetchGetDestinations, selectDestinations } from "../../Store/getDestinationSlice/getDestinationSlice"
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { ThreeCircles } from 'react-loader-spinner'
import { Link } from "react-router-dom";
import { fetchDeleteDestination } from "../../Store/deleteDestinationSlice/deleteDestinationSlice";


function CardDestinasi() {
    // const [isReload, setIsReload] = useState(false);
    const stateDestinations = useSelector(selectDestinations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetDestinations());
    }, [dispatch]);

    // handle delete
    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this Destination?")) {
            dispatch(fetchDeleteDestination(id))
                .then(() => {
                    // Pemanggilan getDestinations setelah penghapusan berhasil
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
                            <div className="col-4 mb-5" key={destination.id}>
                                <div className="card" style={{
                                    width: "18rem",
                                    height: "100%"
                                }}>
                                    <img src={destination.foto} className="card-img-top" alt="..." />
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
                                        {/* <Link to={`/detailwisata/${destination.id}`}> */}
                                        <button type="button" className="btn btn-outline-success text-center mt-3" style={{
                                            width: "100%"
                                        }}>
                                            Edit
                                        </button>
                                        {/* </Link> */}
                                        {/* <Link to={`/detailwisata/${destination.id}`}> */}
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger text-center mt-3"
                                            onClick={() => {
                                                handleDelete(destination.id)
                                            }}
                                            style={{
                                                width: "100%"
                                            }}>
                                            Hapus Destinasi
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default CardDestinasi;