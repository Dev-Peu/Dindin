import logo from "../../assets/logos/logo.svg";
import "./styles.css";

export default function Register() {
  return (
    <div className="container register">
      <header>
        <img src={logo} alt="dindin-logo" />
      </header>
      <main>
        <form>
          <h1 className="title">Cadastre-se</h1>
          <div className="inputs"></div>
        </form>
      </main>
    </div>
  );
}
