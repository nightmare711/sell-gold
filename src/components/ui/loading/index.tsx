import { JSX } from "react";
import animationData from '../../../assets/loading.json';
import Lottie from 'lottie-react'

export const Loading = (): JSX.Element => {
    return (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-white">
            <Lottie
                className="w-32 md:w-44"
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}