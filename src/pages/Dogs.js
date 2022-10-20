import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Dogs({ data }) {
  const { name } = useParams();

  let [myDogChoice, setMyDogChoice] = useState("");

  useEffect(() => {
    setMyDogChoice(name);
  }, [name]);

  return (
    <div>
      <div className="dog flex">
        {data.map((dog, idx) => {
          return (
            <>
              <Link
                key={idx}
                to={"/" + dog.name.toLowerCase()}
                onClick={(e) => {
                  setMyDogChoice(name);
                  // fading all dog images
                  let dogs = e.target.parentElement.parentElement.children;
                  [...dogs].forEach((el) => el.classList.add("fade"));
                  // removing fading from selected dog
                  e.target.parentElement.classList.remove("fade");
                }}
              >
                <img src={dog.img} alt="doggy-img" />
                <p>{dog.name}</p>
              </Link>
            </>
          );
        })}
      </div>
      <div>
        {name && (
          <>
            <p>{name} is a great dog.</p>
            <p>
              he likes to eat{" "}
              {myDogChoice &&
                data.filter((item) => item.name === myDogChoice)[0].favFood}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Dogs;
