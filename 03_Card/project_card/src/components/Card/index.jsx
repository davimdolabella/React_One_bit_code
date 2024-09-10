import image from './assets/starwars_poster.jpg'
export const Card = () =>{
    return(
        <div className="container row align-items-center col-10 col-md-7 bg-dark text-light p-5  mt-5 justify-content-between rounded shadow ">
            <img className="col-lg-4 col-12  rounded shadow mb-3 mb-lg-0" src={image}></img>
            <div className="col-12 col-lg-6">
                <h5 className="card-title">Pôster: Star Wars (1977)</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore quidem esse. Minus cupiditate ducimus, autem consectetur blanditiis, est architecto, nesciunt maxime sint nisi a neque numquam. Ratione, doloribus mollitia.
                </p>
                <button className="btn btn-primary rounded">Comprar Agora</button>
            </div>
        </div>
    )
}