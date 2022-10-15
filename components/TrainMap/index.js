import dynamic from "next/dynamic";

const TrainMap = dynamic(() => import('./trainMap'), {
    ssr: false
});

export default TrainMap;