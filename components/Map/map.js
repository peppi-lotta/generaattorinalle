import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Layout from '../layout';
import styles from '../layout.module.scss'

function Map() {
    return (
        <Layout>
            <MapContainer className={styles.map} center={[60.4518, 22.2666]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className={styles.map_tiles}
                />
            </MapContainer>
        </Layout>
    );
}
export default Map