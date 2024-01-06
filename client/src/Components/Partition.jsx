import OutputContainer from "./OutputContainer";

const Partition = () =>{
    return(
        <div className="flex flex-row justify-around text-center">
            <div className="flex h-24 p-4 border-0 text-slate-100 rounded-md ml-4 bg-blue-600 
            drop-shadow-xl items-center border-b">
                <h2 className="text-xl font-semibold mb-4">CSV to JSON</h2>
             
            </div>
            <div className="flex h-24 p-4 border-0 text-slate-100 rounded-md ml-4 bg-blue-600 
            drop-shadow-xl items-center border-b">
                <h2 className="text-xl font-semibold mb-4">JSON to CSV</h2>
             
            </div>
            <OutputContainer/>
        </div>
    );
};

export default Partition;