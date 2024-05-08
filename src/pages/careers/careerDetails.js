import { useParams,useLoaderData } from "react-router-dom"

export default function CareerDetails(){
    const { id } = useParams()
    const career = useLoaderData()
    return (
        <div className="career-details">
            <h2>{ id }</h2>
            <h2> Careee Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <h2>okay right we are goig to win today</h2>
            <div className="dettails">
                <p>size am matterum tipam mandataram what are you doing this how the fuck you get better </p>
            </div>
        </div>

    )
}


export const careerDetailsLoader = async({params}) => {
    const { id } = params;
 

    const res = await fetch('http://localhost:4000/careers/' + id )

    if(!res.ok){
        throw Error('Could not find that career');
    }
    return res.json();
}