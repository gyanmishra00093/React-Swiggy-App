const Shimmer =() =>{
    return (<div className="resotrant-list">
        {Array(20).
        fill("").
        map((e,index)=>(
        <div key={index} className="shimmer-card"></div>
        ))}   
    </div>
    );
};

export default Shimmer;