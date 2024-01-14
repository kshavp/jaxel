const JSONtoCSV = (props) =>{
    return(
        <div className="flex h-24 p-4 border-0 text-slate-100 rounded-md ml-4 bg-blue-600 
            drop-shadow-xl items-center border-b">
                <h2 className="text-xl font-semibold mb-4">{props.context}</h2>
             
        </div>
    );
}

export default JSONtoCSV;