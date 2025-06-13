import LogoImage from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={LogoImage} alt="Quiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
