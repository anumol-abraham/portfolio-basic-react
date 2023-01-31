import { Link } from "react-router-dom";
import picone from "../images/picone.jpg"
const Home = () => {
    return (
        <>
            <h1 style={{textAlign:"center"}}>Anumol Valliyil Abraham</h1>
        <div className="container">      
            <img className="img-box" src={picone} alt="my home pic" height={400} width={350} />
           <div className="text">
             <p>A passionate and ambitious person with a focus on front-end developement. I am innovative and always looking for new ways to improve my skills.</p> 
           </div>
       </div>
       <Link to="/about"><button className="btn-read">Read more about me</button></Link>
       
        </>
    ); 
};
export default Home;