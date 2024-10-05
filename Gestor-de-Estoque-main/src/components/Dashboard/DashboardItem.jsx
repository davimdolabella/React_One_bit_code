export default function DashboardItem({info,data}){
    return(
        <div className="bg-secondary text-light col-12 col-sm-5 col-md-4 col-lg-3 rounded d-flex justify-content-center flex-column align-items-center px-5 py-3">
            <h3 className="text-center">{info}</h3>
            <h2>{data}</h2>
        </div>
    )
}