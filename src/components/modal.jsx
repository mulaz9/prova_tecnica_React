export default function Modal(props) {
  const pageReloadHandler = function (e) {
    e.stopPropagation();
    location.href = location.href;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3 className="modal-text">{props.children}</h3>
        <button className="btn btn-modal" onClick={pageReloadHandler}>
          ok
        </button>
      </div>
    </div>
  );
}
