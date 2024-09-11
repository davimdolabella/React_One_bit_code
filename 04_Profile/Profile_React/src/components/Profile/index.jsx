import styles from "./styles.module.css"
export default function Profile(props){
    return(
        <div className=" col-10 col-md-7 col-lg-6 d-flex flex-column align-items-center justify-content-center bg-secondary mx-auto rounded p-4 mt-5  text-light">

            
        <div style={{
                backgroundImage:`url(${props.avatar})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                width:'150px',
                height:'150px',
                borderRadius:'50%'
            }} className="shadow mb-3"
        ></div>
            <h2>{props.name}</h2>
            <hr />
            <div>{props.bio}</div>
            <hr />
            <div>{props.phone}</div>
            <hr />
            <div>{props.email}</div>
            <hr />
            <div className="d-flex flex-column gap-3 mt-2 col-4">
                <a href={props.githubURL} target="_blank" className="btn btn-dark rounded shadow">GitHub</a>
                <a href={props.linkedinURL} target="_blank" className="btn btn-dark rounded shadow">Linkedin</a>
                <a href={props.twitterURL} target="_blank" className="btn btn-dark rounded shadow">Twitter</a>
            </div>
        </div>
    )
}