import { useEffect, useState } from "react";


export default function Header() {

  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = (ev) => {
      if (window.scrollY > 100) {
        setBackgroundColor("#000000")
      } else {
        setBackgroundColor("transparent")
      }

    }

    document.addEventListener('scroll', handleScroll)

    //limpeza do evento de scroll
    return ()=> document.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: backgroundColor, color: "#fff", width: "100%", position: "fixed", zIndex: 9999, transition: "0.3s" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/assets/images/logo2.png" alt="" width={150} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "14px", fontWeight: "500" }}>
              <li className="nav-item">
                <a style={{ color: "#fff" }} className="nav-link active" aria-current="page" href="#">Sobre</a>
              </li>
              <li className="nav-item">
                <a style={{ color: "#fff" }} className="nav-link active" aria-current="page" href="#">Serviços</a>
              </li>
              <li className="nav-item">
                <a style={{ color: "#fff" }} className="nav-link active" aria-current="page" href="#">Portfólio</a>
              </li>
              <li className="nav-item">
                <a style={{ color: "#fff" }} className="nav-link active" aria-current="page" href="#">Contato</a>
              </li>
            </ul>
            <a style={{ color: "#fff", marginRight: "20px", cursor: "pointer" }}>
              <span style={{ marginRight: "6px" }}>Acesse</span>
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            <button className="btn ml-3" style={{ background: "#fff", color: "#000000" }} type="submit">Abra sua conta</button>
          </div>
        </div>
      </nav>
    </header>

  );
}