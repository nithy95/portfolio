import "./my-story.css";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import { Icon } from "@iconify/react";
import { Stack } from "@mui/material";

const MyStory = () => {
  return (
    <ElevatedCard title={"My Story..."} icon="iconoir:notes">
      <div className="my-story-container">
        <div className="story">
          <p>
            Hi there👋 I'm Nithy , Experienced Software Engineer with expertise
            in versatile technologies involving in Full- stack development,
            automation, DevOps and Cloud. I build Sites, Apps, and Teach
            aspiring developers.
          </p>
          <p>
            Constantly Embracing new Techs and Jack of all Trades is what i
            beleive in. Here's little about myself.
          </p>

          <p>
            I'm from a wonderous town called
            udumalpet[https://goo.gl/maps/6qqamPBuSsknEaTp7] in tirupur, India.
            From an young age I've had a curiocity of a cat, and many of my
            father's radios and DVD palyers has been sent to their grave because
            of it😂. I've got my first enounter with a computer in my 8th grade
            ever since then it's been a crazed ride.
          </p>

          <p>
            After gradutating from high school, I picked computer sciecne as a
            Major from Kongu Engineering college because it felt like an obvious
            choice. From my second year of college I started developing android
            apps and websites with bunch of my geek friends,{" "}
          </p>
        </div>
        <div className="interests">
          <span>My Interests</span>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <div className="interest-block">
                <span style={{}}>
                  <Icon
                    icon="jam:gamepad-f"
                    width="35"
                    height="35"
                    className="icon"
                    color="#ffffffe6"
                  />
                </span>
                <span>Games</span>
              </div>
            </li>
            <li>
              <div className="interest-block">
                <Icon
                  icon="fa-solid:headphones-alt"
                  width="35"
                  height="35"
                  className="icon"
                  color="#ffffffe6"
                />
                <p>Music</p>
              </div>
            </li>
            <li>
              <div className="interest-block">
                <Icon
                  icon="ic:round-gps-fixed"
                  width="35"
                  height="35"
                  className="icon"
                  color="#ffffffe6"
                />
                <p>Travel</p>
              </div>
            </li>

            <li>
              <div className="interest-block">
                <Icon
                  icon="ic:round-gps-fixed"
                  width="35"
                  height="35"
                  className="icon"
                  color="#ffffffe6"
                />
                <p>Gym</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ElevatedCard>
  );
};

export default MyStory;
