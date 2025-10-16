import React from "react";

const QuestionPage = () => {
  return (
    <>
      <div className="container">
        <section className="questionText">
          <p>
            You step into a cozy café after a long day. The air smells like
            roasted coffee and fresh pastries. There’s a quiet corner, a busy
            communal table, and a sunny spot by the window. What do you do
            first?
          </p>
        </section>

        <section className="buttonsSec">
          <div className="buttonGroup1">
            <button>
              A. Head straight to a quiet table, pull out your laptop, and get
              to work
            </button>

            <button>
              B. Find a window seat and take a few selfies with your drink
            </button>

            <button>
              C. Choose a calm corner, grab a book, and sip slowly
            </button>
          </div>

          <div className="buttonGroup2">
            <button>
              D. Wave at your friends already sitting at a big table and join
              them laughing
            </button>
            <button>
              E. Scout the menu for the most colorful, fruity drink
            </button>
            <button>
              F. Sit somewhere central, ready to chat and share snacks with
              anyone passing by
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuestionPage;
