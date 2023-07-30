import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

function Provider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = {
    A1: [
  {
    id: 3,
    question: "lenient parent",
    answers: [
      { answer: "tall", trueAnswer: false },
      { answer: "not strict", trueAnswer: true },
      { answer: "wise", trueAnswer: false },
      { answer: "foolish", trueAnswer: false },
      { answer: "severe", trueAnswer: false },
    ],
  },
  {
    id: 4,
    question: "repulsive personality",
    answers: [
      { answer: "disgusting", trueAnswer: true },
      { answer: "attractive", trueAnswer: false },
      { answer: "normal", trueAnswer: false },
      { answer: "confused", trueAnswer: false },
      { answer: "conceited", trueAnswer: false },
    ],
  },
  {
    id: 5,
    question: "audacious attempt",
    answers: [
      { answer: "useless", trueAnswer: false },
      { answer: "bold", trueAnswer: true },
      { answer: "foolish", trueAnswer: false },
      { answer: "crazy", trueAnswer: false },
      { answer: "necessary", trueAnswer: false },
    ],
  },
  {
    id: 9,
    question: "an incredible story",
    answers: [
      { answer: "true", trueAnswer: false },
      { answer: "interesting", trueAnswer: false },
      { answer: "well-known", trueAnswer: false },
      { answer: "unbelievable", trueAnswer: true },
      { answer: "unknown", trueAnswer: false },
    ],
  },
  {
    id: 12,
    question: "an anonymous donor",
    answers: [
      { answer: "generous", trueAnswer: false },
      { answer: "stingy", trueAnswer: false },
      { answer: "well-known", trueAnswer: false },
      { answer: "one whose name is not known", trueAnswer: true },
      { answer: "reluctant", trueAnswer: false },
    ],
  },
  {
    id: 24,
    question: "a gourmet",
    answers: [
      { answer: "seasoned traveler", trueAnswer: false },
      { answer: "greedy eater", trueAnswer: false },
      { answer: "vegetarian", trueAnswer: false },
      { answer: "connoisseur of good food", trueAnswer: true },
      { answer: "skillful chef", trueAnswer: false },
    ],
  },
  {
    id: 25,
    question: "to simulate interest",
    answers: [
      { answer: "pretend", trueAnswer: true },
      { answer: "feel", trueAnswer: false },
      { answer: "lose", trueAnswer: false },
      { answer: "stir up", trueAnswer: false },
      { answer: "ask for", trueAnswer: false },
    ],
  },
  {
    id: 31,
    question: "a nostalgic feeling",
    answers: [
      { answer: "nauseated", trueAnswer: false },
      { answer: "homesick", trueAnswer: true },
      { answer: "sharp", trueAnswer: false },
      { answer: "painful", trueAnswer: false },
      { answer: "delighted", trueAnswer: false },
    ],
  },
  {
    id: 10,
    question: "an ophthalmologist",
    answers: [
      { answer: "eye doctor", trueAnswer: true },
      { answer: "skin doctor", trueAnswer: false },
      { answer: "foot doctor", trueAnswer: false },
      { answer: "heart doctor", trueAnswer: false },
      { answer: "cancer specialist", trueAnswer: false },
    ],
  },
  {
    id: 7,
    question: "prevalent disease",
    answers: [
      { answer: "dangerous", trueAnswer: false },
      { answer: "catching", trueAnswer: false },
      { answer: "childhood", trueAnswer: false },
      { answer: "fatal", trueAnswer: false },
      { answer: "widespread", trueAnswer: true },
    ],
  },
],

    A2:[
  {
    id: 2,
    question: "a baing problem",
    answers: [
      { answer: "difficult", trueAnswer: false },
      { answer: "simple", trueAnswer: false },
      { answer: "puzzling", trueAnswer: true },
      { answer: "long", trueAnswer: false },
      { answer: "new", trueAnswer: false },
    ],
  },
  {
    id: 7,
    question: "prevalent disease",
    answers: [
      { answer: "dangerous", trueAnswer: false },
      { answer: "catching", trueAnswer: false },
      { answer: "childhood", trueAnswer: false },
      { answer: "fatal", trueAnswer: false },
      { answer: "widespread", trueAnswer: true },
    ],
  },
  {
    id: 13,
    question: "performed an autopsy",
    answers: [
      { answer: "examination of living tissue", trueAnswer: false },
      { answer: "examination of a corpse to determine the cause of death", trueAnswer: true },
      { answer: "process in the manufacture of optical lenses", trueAnswer: false },
      { answer: "operation to cure an organic disease", trueAnswer: false },
      { answer: "series of questions to determine the causes of delinquent behavior", trueAnswer: false },
    ],
  },
  {
    id: 19,
    question: "an ocular problem",
    answers: [
      { answer: "unexpected", trueAnswer: false },
      { answer: "insoluble", trueAnswer: false },
      { answer: "visual", trueAnswer: true },
      { answer: "continual", trueAnswer: false },
      { answer: "imaginary", trueAnswer: false },
    ],
  },
  {
    id: 42,
    question: "an anachronous attitude",
    answers: [
      { answer: "unexplainable", trueAnswer: false },
      { answer: "unreasonable", trueAnswer: false },
      { answer: "belonging to a different time", trueAnswer: true },
      { answer: "out of place", trueAnswer: false },
      { answer: "unusual", trueAnswer: false },
    ],
  },
  {
    id: 20,
    question: "a notorious demagogue",
    answers: [
      { answer: "rabble-rouser", trueAnswer: true },
      { answer: "gambler", trueAnswer: false },
      { answer: "perpetrator of financial frauds", trueAnswer: false },
      { answer: "liar", trueAnswer: false },
      { answer: "spendthrift", trueAnswer: false },
    ],
  },
  {
    id: 28,
    question: "the apathetic citizens",
    answers: [
      { answer: "made up of separate ethnic groups", trueAnswer: false },
      { answer: "keenly vigilant of their rights", trueAnswer: false },
      { answer: "politically conservative", trueAnswer: false },
      { answer: "indifferent, uninterested, uninvolved", trueAnswer: true },
      { answer: "terrified", trueAnswer: false },
    ],
  },
  {
    id: 54,
    question: "gregarious person",
    answers: [
      { answer: "outwardly calm", trueAnswer: false },
      { answer: "very sociable", trueAnswer: true },
      { answer: "completely untrustworthy", trueAnswer: false },
      { answer: "vicious", trueAnswer: false },
      { answer: "self-effacing and timid", trueAnswer: false },
    ],
  },
  {
    id: 33,
    question: "be more circumspect",
    answers: [
      { answer: "restrained", trueAnswer: false },
      { answer: "confident", trueAnswer: false },
      { answer: "cautious", trueAnswer: true },
      { answer: "honest", trueAnswer: false },
      { answer: "intelligent", trueAnswer: false },
    ],
  },
  {
    id: 39,
    question: "an unequivocal statement",
    answers: [
      { answer: "hard to understand", trueAnswer: false },
      { answer: "lengthy", trueAnswer: false },
      { answer: "politically motivated", trueAnswer: false },
      { answer: "clear and forthright", trueAnswer: true },
      { answer: "supporting", trueAnswer: false },
    ],
  },
],

    A3: [ {
    id: 16,
    question: "endless loquacity",
    answers: [
      { answer: "misery", trueAnswer: false },
      { answer: "fantasy", trueAnswer: false },
      { answer: "repetitiousness", trueAnswer: true },
      { answer: "ill health", trueAnswer: false },
      { answer: "talkativeness", trueAnswer: false },
    ],
  },
  {
    id: 23,
    question: "in retrospect",
    answers: [
      { answer: "view of the past", trueAnswer: true },
      { answer: "artistic balance", trueAnswer: false },
      { answer: "anticipation", trueAnswer: false },
      { answer: "admiration", trueAnswer: false },
      { answer: "second thoughts", trueAnswer: false },
    ],
  },
  {
    id: 27,
    question: "a clandestine meeting",
    answers: [
      { answer: "prearranged", trueAnswer: false },
      { answer: "hurried", trueAnswer: false },
      { answer: "important", trueAnswer: false },
      { answer: "secret", trueAnswer: true },
      { answer: "public", trueAnswer: false },
    ],
  },
  {
    id: 32,
    question: "feel antipathy",
    answers: [
      { answer: "bashfulness", trueAnswer: false },
      { answer: "stage fright", trueAnswer: false },
      { answer: "friendliness", trueAnswer: false },
      { answer: "hostility", trueAnswer: true },
      { answer: "suspense", trueAnswer: false },
    ],
  },
  {
    id: 34,
    question: "an intrepid fighter for human rights",
    answers: [
      { answer: "fearless", trueAnswer: true },
      { answer: "eloquent", trueAnswer: false },
      { answer: "popular", trueAnswer: false },
      { answer: "experienced", trueAnswer: false },
      { answer: "famous", trueAnswer: false },
    ],
  },
  {
    id: 36,
    question: "a taciturn host",
    answers: [
      { answer: "stingy", trueAnswer: false },
      { answer: "generous", trueAnswer: false },
      { answer: "disinclined to conversation", trueAnswer: true },
      { answer: "charming", trueAnswer: false },
      { answer: "gloomy", trueAnswer: false },
    ],
  },
  {
    id: 43,
    question: "an anomalous situation",
    answers: [
      { answer: "dangerous", trueAnswer: false },
      { answer: "intriguing", trueAnswer: false },
      { answer: "unusual", trueAnswer: true },
      { answer: "pleasant", trueAnswer: false },
      { answer: "unhappy", trueAnswer: false },
    ],
  },
  {
    id: 46,
    question: "a laconic reply",
    answers: [
      { answer: "immediate", trueAnswer: false },
      { answer: "assured", trueAnswer: false },
      { answer: "terse and meaningful", trueAnswer: true },
      { answer: "unintelligible", trueAnswer: false },
      { answer: "angry", trueAnswer: false },
    ],
  },
  {
    id: 48,
    question: "cavalier treatment",
    answers: [
      { answer: "courteous", trueAnswer: false },
      { answer: "haughty and highhanded", trueAnswer: true },
      { answer: "negligent", trueAnswer: false },
      { answer: "affectionate", trueAnswer: false },
      { answer: "expensive", trueAnswer: false },
    ],
  },
  {
    id: 56,
    question: "an egregious error",
    answers: [
      { answer: "outstandingly bad", trueAnswer: true },
      { answer: "slight", trueAnswer: false },
      { answer: "irreparable", trueAnswer: false },
      { answer: "unnecessary", trueAnswer: false },
      { answer: "deliberate", trueAnswer: false },
    ],
  },
]
  };

  const sharedValuesAndMethods = {
    questions,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <QuizContext.Provider value={sharedValuesAndMethods}>
      <div className="bruhwotthe">
      {children}
      </div>
    </QuizContext.Provider>
  );
}

const useQuizContext = () => useContext(QuizContext);
export { Provider, useQuizContext };
export default QuizContext;
