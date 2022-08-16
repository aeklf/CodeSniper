import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <img
                className="headerImg"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--NfOCGDyJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/rq48n957djcp028jlv59.jpg"
                alt="image of code"
            />
            <span className="headerTitleLg">CodeSniper</span>
        </div>
    );
}