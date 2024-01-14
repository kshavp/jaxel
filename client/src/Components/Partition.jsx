import CSVtoJSON from "./CSVtoJSON";
import JSONtoCSV from "./JSONtoCSV";
import OutputContainer from "./OutputContainer";

const Partition = () =>{
    return(
        <div className="flex flex-row justify-around text-center">
            <CSVtoJSON context="CSV to JSON"/>
            <JSONtoCSV context="JSON to CSV"/>
            <OutputContainer context="Output"/>
        </div>
    );
};

export default Partition;