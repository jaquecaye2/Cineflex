export default function ClasseAssento({type, name}){
    return(
        <div className="classeAssento">
          <div className={type}></div>
          <p>{name}</p>
        </div>
    )
}