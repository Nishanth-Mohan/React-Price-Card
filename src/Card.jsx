function Card(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4">
      <div className="card">
          <h6 className="card-title text-secondary">{props.name}</h6>
          <h1 className="card-price mb-3">{props.price}</h1>
          <h1 className="border-bottom border-body-tertiary short-border"></h1>
         <div className="card-body">
           <ul className="list-group list-group-flush">
            <li className="list-group-item"><i class="fa fa-check" aria-hidden="true"/> {props.user}</li>
            <li className="list-group-item"><i class="fa fa-check" aria-hidden="true"/> {props.storage}</li>
            <li className="list-group-item"><i class="fa fa-check" aria-hidden="true"/> {props.public}</li>
            <li className="list-group-item"><i class="fa fa-check" aria-hidden="true"/> {props.Access}</li>
            <li className={`list-group-item ${props.privateDisabled ? "disabled" : ""}`} aria-disabled="true">{props.privateDisabled ? <i class="fa fa-times"></i> : <i class="fa fa-check" aria-hidden="true"/>} {props.private}</li>
            <li className={`list-group-item ${props.supportDisabled ? "disabled" : ""}`} aria-disabled="true">{props.supportDisabled ? <i class="fa fa-times"></i> : <i class="fa fa-check" aria-hidden="true"/>} {props.support}</li>
            <li className={`list-group-item ${props.subdomainDisabled ? "disabled" : ""}`} aria-disabled="true">{props.subdomainDisabled ? <i class="fa fa-times"></i> : <i class="fa fa-check" aria-hidden="true"/>} {props.subdomain}</li>
            <li className={`list-group-item ${props.statusDisabled ? "disabled" : ""}`} aria-disabled="true">{props.statusDisabled ? <i class="fa fa-times"></i> : <i class="fa fa-check" aria-hidden="true"/>} {props.status}</li>
           </ul> 
            <a href="#" className="btn btn-primary">Button</a>
         </div>
      </div>
    </div>   
  );
}
export default Card;
