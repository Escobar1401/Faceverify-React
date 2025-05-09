import './DownloadButton.css'
import downloadIcon from '../assets/download.svg'

function DownloadButton() {
    return (
        <div className="DownloadButton">
            <img src={downloadIcon} alt="icon" />
        </div>
    )
}

export default DownloadButton