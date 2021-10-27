

export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#000000", color: "#fff", width: "100%", position: "fixed"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/assets/images/logo2.png" alt="" width={150}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize: "14px", fontWeight: "500"}}>
              <li className="nav-item">
                <a style={{color: "#fff"}} className="nav-link active" aria-current="page" href="#">Sobre</a>
              </li>
              <li className="nav-item">
                <a style={{color: "#fff"}} className="nav-link active" aria-current="page" href="#">Serviços</a>
              </li>
              <li className="nav-item">
                <a style={{color: "#fff"}} className="nav-link active" aria-current="page" href="#">Portfólio</a>
              </li>
              <li className="nav-item">
                <a style={{color: "#fff"}} className="nav-link active" aria-current="page" href="#">Contato</a>
              </li>
            </ul>
            <button className="btn btn-link" style={{color: "#fff"}} type="submit">Acesse</button>
            <button className="btn" style={{background: "#fff", color: "#000000"}} type="submit">Abra sua conta</button>
          </div>
        </div>
      </nav>
    );
}