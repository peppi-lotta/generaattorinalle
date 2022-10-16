import dynamic from "next/dynamic";

const Saved = dynamic(() => import('./saved'), {
    ssr: false
});

export default Saved;