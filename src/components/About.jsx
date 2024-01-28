import User from "./User";
import UserClass from "./UserClass";

const About = () => (
  <div className="about">
    <div className="info">
      <h1>Welcome to my First React Website</h1>
      <p>I really thank Mr. Akshay Saini Sir for such a wonderful course</p>
      <User />
      <UserClass name="Twinkle" position="Full Stack Developer" />
    </div>
  </div>
);
export default About;
