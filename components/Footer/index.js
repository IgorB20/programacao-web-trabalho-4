import styles from './Footer.module.css';


export default function Footer() {
    return (
        <footer style={{ background: "#000000", color: "#fff", paddingTop: "64px", paddingBottom: "64px"}} className="px-5">
            <div className="row">
                <div className="col-sm">
                    <ul className={styles.list}>
                        <li className={styles.list_title}>MasterBank</li>
                        <li>Sobre nós</li>
                        <li>Perguntas frequentes</li>
                        <li>Carreiras</li>
                        <li>Contato</li>
                    </ul>
                </div>

                <div className="col-sm">
                    <ul className={styles.list}>
                        <li className={styles.list_title}>Produtos</li>
                        <li>Conta digital</li>
                        <li>Cartão de crédito</li>
                        <li>Empréstimo</li>
                        <li>Conta PJ</li>
                    </ul>
                </div>

                <div className="col-sm">
                    <ul className={styles.list}>
                        <li className={styles.list_title}>Explore</li>
                        <li>Comunidade</li>
                        <li>Blog</li>
                        <li>Newsletter</li>
                        <li>MasterBank Brasil</li>
                    </ul>
                </div>

                <div className="col-sm">
                    <ul className={styles.list}>
                        <li className={styles.list_title}>Veja também</li>
                        <li>Comunidade</li>
                        <li>Blog</li>
                        <li>Newsletter</li>
                        <li>MasterBank Brasil</li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}