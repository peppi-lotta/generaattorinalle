import dynamic from "next/dynamic";

const BusMap = dynamic(() => import('./busMap'), {
    ssr: false
});

export default BusMap;