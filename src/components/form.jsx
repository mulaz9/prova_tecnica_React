export default function Form(props) {
  return (
    <div className="dati-personali">
      <h4 className="action-title">Compila i campi seguenti.</h4>
      <form className="form" onSubmit={props.onSubmit}>
        <label className="form-section-title" htmlFor="personal_informations">
          Informazioni personali e di contatto
        </label>
        <div className="input-fields col-6">
          <input
            type="text"
            id="name"
            name="name"
            onChange={props.onChange}
            placeholder=" "
            required
          />
          <label htmlFor="nome">Nome</label>
        </div>
        <div className="input-fields col-6">
          <input
            type="text"
            id="surname"
            name="surname"
            onChange={props.onChange}
            placeholder=" "
            required
          />
          <label htmlFor="cognome">Cognome</label>
        </div>
        <div className="input-fields col-6">
          <input
            type="phone"
            id="phone"
            name="phone"
            onChange={props.onChange}
            placeholder=" "
            required
          />
          <label htmlFor="telefono">Telefono</label>
        </div>
        <div className="input-fields col-6">
          <input
            type="email"
            id="email"
            name="email"
            onChange={props.onChange}
            placeholder=" "
            required
          />
          <label htmlFor="email">E-mail</label>
        </div>
        <label className="form-section-title" htmlFor="address">
          Indirizzo
        </label>
        <div className="input-fields col-6">
          <input
            type="address"
            id="address"
            name="address"
            onChange={props.onChange}
            placeholder=" "
            required
          />
          <label htmlFor="via">Via</label>
        </div>
        <div className="input-fields col-3">
          <input
            type="text"
            id="zip"
            name="zip"
            onChange={props.zipChange}
            placeholder=" "
            required
          />
          <label htmlFor="CAP">CAP</label>
        </div>
        <div className="input-fields col-3">
          <input
            type="text"
            id="province"
            name="province"
            onChange={props.onChange}
            placeholder=" "
            required
          />
          <label htmlFor="provincia">Provincia</label>
        </div>
        <div className="input-fields col-6">
          <input
            type="text"
            id="city"
            name="city"
            onChange={props.onChange}
            placeholder=" "
            required
          />
          <label htmlFor="città">Città</label>
        </div>
        <div className="input-fields col-6">
          <input
            type="text"
            id="country"
            name="country"
            onChange={props.onChange}
            placeholder=" "
            required
          />
          <label htmlFor="nazione">Nazione</label>
        </div>
        <input
          className="btn btn-form"
          type="submit"
          name="continua"
          id="continua"
          value="Continua"
        />
      </form>
    </div>
  );
}
