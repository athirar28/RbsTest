const characterCard=(props)=>{
  const diff_years=(dt2)=> 
  {
    let diff =(new Date(dt2).getTime() - new Date().getTime()) / 1000;
      diff /= (60 * 60 * 24);
   return Math.abs(Math.round(diff/365.25));
    
  }
    return(
      <>
      {props.cardDetails && props.cardDetails.results&&props.cardDetails.results.length
      ?props.cardDetails.results.map((card,key)=>{
        return(
          <div className="MuiGrid-root jss10 MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-3" key={key}>
          <div className="jss15">
            <div className="jss16">
              <div><img className="jss19" src={card.image} alt="Character" /></div>
              <div className="jss17">
                <p className="jss18">{card.name}</p>
                <p>id: {card.id}- created {diff_years(card.created)} years ago</p>
              </div>
            </div>
            <div className="jss20">
              <div className="jss21">
                <div>STATUS</div>
                <div className="jss23">{card.status}</div>
              </div>
              <div className="jss21">
                <div>SPECIES</div>
                <div className="jss23">{card.species}</div>
              </div>
              <div className="jss21">
                <div>GENDER</div>
                <div className="jss23">{card.gender}</div>
              </div>
              <div className="jss21">
                <div className="jss22">ORIGIN</div>
                <div className="jss23">{card.origin.name}</div>
              </div>
              <div className="jss21">
                <div className="jss22">LAST LOCATION</div>
                <div className="jss23">{card.location.name}</div>
              </div>
            </div>
          </div>
        </div>
        )
      }):null}
      
      </>
       
    )
}
export default characterCard;