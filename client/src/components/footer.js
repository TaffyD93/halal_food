import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer() {
    
    return (
        <footer className="footer">
            <div className="icon">
                <ul>
                    <li>
                        <FacebookIcon />
                    </li>
                    <li>
                        <InstagramIcon />
                    </li>
                    <li>
                        <TwitterIcon />
                    </li>
                </ul>
            </div>
            <p>Halal Food Finder 2023 | All rights are reserved</p>
        </footer>
    );
}