import ReactDom from "react-dom";
import "./modal.scss";
import AcceptButton from "./ModalDependencies/AcceptButton/";
import Exit from "./ModalDependencies/Exit/";

const Modal = ({ show, close, tandc, title, children }) => {
  return ReactDom.createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
      >
        <div className="modal"  >
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <Exit close={close}></Exit>
          </header>
          <main className="modal_content">{children}</main>
          <footer className="modal_footer">
            <AcceptButton tandc={tandc}></AcceptButton>
          </footer>
        </div>
      </div>

    </>,
    document.getElementById("modal")
  );
};

export default Modal;
