import "./mainCompany.css";
const CompanyCards =({img,head,pragh})=>{
    
    return(<>
      <div className="cards">
        <div className="company-img">
          <img src={img} alt="Company"/>
        </div>
        <div className="company-details">
          <h2>{head}</h2>
          <p>{pragh}</p>
        </div>
      </div>

    
    </>)
}


export {CompanyCards};