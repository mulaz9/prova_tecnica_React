export default function RightSide() {
  return (
    <section id="right-side">
      <div className="card">
        <h1 className="card-title">Benvenuto!</h1>
        <svg
          className="mail-ico"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z"
          />
        </svg>
        <blockquote className="card-text">
          Registrati e inizia a gestire i tuoi contatti in un click!
        </blockquote>
      </div>
    </section>
  );
}
