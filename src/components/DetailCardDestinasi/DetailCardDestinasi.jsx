import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGetDestinationById, selectDestination } from "../../Store/getDestinationSliceById/getDestinationSliceById";
import { ThreeCircles } from 'react-loader-spinner'

function DetailCardDestinasi() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const stateDestination = useSelector(selectDestination);

    useEffect(() => {
        dispatch(fetchGetDestinationById(id));
    }, [dispatch, id]);
    return (
        <>
            {stateDestination.status === "loading" &&
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
            }
            {stateDestination.status === "failed" && (
                <div>
                    <p>Something Went Wrong</p>
                    <p>{stateDestination.message}</p>
                </div>
            )}
            {stateDestination.status === "success" && (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mt-3 text-center">
                                {stateDestination.data.judul}
                            </h2>
                            <div className="image">
                                <img src={stateDestination.data.foto} alt="..." style={{
                                    height: "460px",
                                    width: "100%"
                                }} />
                            </div>
                            <p className="mt-4 text-justify">
                                {stateDestination.data.keterangan}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
export default DetailCardDestinasi