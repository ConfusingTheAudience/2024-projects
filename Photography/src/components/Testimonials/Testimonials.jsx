import React, { useEffect, useState } from "react";
import styles from "./testimonials.module.css";
import photo1 from "../../assets/testimonials1.jpg";
import photo2 from "../../assets/testimonials2.jpg";
import photo3 from "../../assets/testimonials3.jpg";
import photo4 from "../../assets/testimonials4.jpg";
import photo5 from "../../assets/testimonials5.jpg";
import { FaStar } from "react-icons/fa6";

const persons = [
  {
    id: 1,
    name: "Miguel",
    comment:
      "The high quality photos and professionalism convinced me to buy the session and I have no regrets",
    photo: photo1,
  },
  {
    id: 2,
    name: "Christy",
    comment:
      "After more than a year of cooperation and a dozen photos and sessions, I find that I can recommend this photographer",
    photo: photo2,
  },
  {
    id: 3,
    name: "Diego",
    comment:
      "As a former Compro employee, I can't say a bad word about the work methodology. Always organized and with humor",
    photo: photo3,
  },
  {
    id: 4,
    name: "Lucia",
    comment:
      "The outdoor session went off without a hitch despite the bad weather we dealt with and the photos came out great",
    photo: photo4,
  },
  {
    id: 5,
    name: "Andrés",
    comment:
      "I needed a session with my spouse, I purchased a package and to this day we still enjoy visiting the studio",
    photo: photo5,
  },
];

const Testimonials = () => {
  // every change of the site is registered to force animation stop
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, []);

  return (
    <div className={styles.testimonialsContainer} key={key}>
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.ratingBox}>
        {persons.map((person) => (
          <div className={styles.rating} key={person.id}>
            <div className={styles.imgBox}>
              <img src={person.photo} alt="photo" className={styles.img} />
            </div>
            <h2 className={styles.name}>{person.name}</h2>
            <p className={styles.comment}>{person.comment}</p>
            <div className={styles.stars}>
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          </div>
        ))}
        <div className={styles.endMobileAnimationText}>
          From people for people
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
