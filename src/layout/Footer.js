import "./style.css";
export default function Footer() {
  return (
    <footer className="page-footer">
          <div className="cc">© {new Date().getFullYear()} Copyright Text</div>
          <div>
            <a className="grey-text" href="#!">
              Movie
            </a>
          </div>
    </footer>
  );
}
