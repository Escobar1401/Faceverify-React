import './home.css';
import Header from '../components/Header';

function Home() {
    return (
        <div className="home-container">
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <Header />
            </div>
        </div>
    );
}
export default Home;
