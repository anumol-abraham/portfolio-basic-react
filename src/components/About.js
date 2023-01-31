import pictwo from "../images/pictwo.jpg"
import picthree from "../images/picthree.jpg"
const About = () => {
    return (
        <>
        <h1 style={{textAlign:"center"}}>About Me</h1>
        <div className="abt-container1">
            <img className="img-box1" src={pictwo} alt="my about pic1" height={500} width={450} />
            <p className="text">
Hi, I am Anumol Valliyil Abraham and I an Indian, I came to Sweden 3 years ago with my husband and daughter. I am a nature lover and I enjoy walking through the forest during my free time.   
            </p>
            </div>
            <h1 style={{textAlign:"start", margin:"50px"}}>Work Experience</h1>
        <div className="abt-container2">
        <img className="img-box2" src={picthree} alt="my about pic2" height={500} width={450} />
                
        <div>
                <ul className="work">
                    <li>Internal Communications Specialist</li>
                    <li>Digital Marketing Associate</li>
                    <li>Sales Manager</li>
                </ul>
                </div>
                </div>
                </>
    );
};
export default About;