import React, { useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import { Vehicle } from "../../store/types";
import { connect } from "react-redux";
import { getVehicleDataRequest } from '../../store/actions';
import ImageGallery from "../../components/ImageGallery";

interface IProps {
    vehicle: Vehicle;
    getVehicleDataRequest: () => void
}

const Home = ({
    vehicle,
    getVehicleDataRequest
}: IProps) => {
    const { images } = vehicle;

    useEffect(() => {
        getVehicleDataRequest();
    }, [getVehicleDataRequest]);

    return (
        <div>
            <HeaderBar />
            {
                images &&
                <ImageGallery
                    imageData={images}
                    title={vehicle.title}
                    desc={vehicle.htmlDescription}
                />
            }
        </div >
    )
}

export default connect(
    (
        state: {
            vehicle: Vehicle,
            isLoading: boolean
        }) => ({ vehicle: state.vehicle }),
    {
        getVehicleDataRequest
    }
)(Home);