import Navbar from "../components/Navbar";

function Home(){
    return(
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Welcome to Ecommerce</h2>
                        <p>Choose a category to start shopping now</p>

                        <div className="row m-5">
                            <div className="col" />
                                <div className="card py-5 rounded-3 bg-dark text-white">
                                    <h5>Electronics</h5>
                                </div>
                                <div className="col" />
                                <div className="card py-5 rounded-3 bg-dark text-white">
                                    <h5>Fashion</h5>
                                </div>
                                <div className="col" />
                                <div className="card py-5 rounded-3 bg-dark text-white">
                                    <h5>Household</h5>
                                </div>
                                <div className="col" />
                                <div className="card py-5 rounded-3 bg-dark text-white">
                                    <h5>Appliance</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                

            </div>
        </div>
    )
}

export default Home;