import { motion } from "framer-motion";
import "./Feedback.css";

/* ===============================
   REVIEWS DATA
================================ */
const reviews = [
  {
    source: "Google",
    rating: 5,
    text: "Always so delicious. The staff is incredible and attentive. My favorite restaurant in Ocala.",
    author: "James T.",
  },
  {
    source: "Yelp",
    rating: 5,
    text: "The restaurant is very clean, food is amazing and servers very attentive. You will not regret eating here.",
    author: "Elizabeth M.",
  },
  {
    source: "Reddit",
    rating: 5,
    text: "I had some of the best Indian food around. Tandoori Chicken, Rogan Josh and samosa chaat — everything was incredible.",
    author: "Rahul S.",
  },
  {
    source: "Google",
    rating: 5,
    text: "Gorgeous ambiance and stellar service. Dining alone or with family — always perfect.",
    author: "Marie R.",
  },
];

/* ===============================
   CARD
================================ */
function ReviewCard({ review }) {
  return (
    <div className="feedback-card">
      <div className="feedback-card-header">
        <span>{review.source}</span>
        <span className="feedback-stars">
          {"★".repeat(review.rating)}
        </span>
      </div>

      <p className="feedback-text">{review.text}</p>

      <p className="feedback-author">
        Author<br />
        <span>{review.author}</span>
      </p>
    </div>
  );
}

/* ===============================
   FEEDBACK SECTION
================================ */
export default function Feedback() {
  return (
    <section className="feedback">
      <div className="feedback-heading">
        <h2>
          WHAT OUR<br />GUESTS SAY
        </h2>
      </div>

      <div className="feedback-slider">
        {/* Fade edges */}
        <div className="fade-left" />
        <div className="fade-right" />

        <motion.div
          className="feedback-row"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 9,
              ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
