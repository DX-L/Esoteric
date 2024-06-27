import './welcomepage.scss'


function WelcomePage() {
    return (
        <div className="welcomepage">
            <div className="bgImg">
                <img src="https://images.unsplash.com/photo-1548276332-76fd45e25952?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="title">
                    <h1>Esoteric</h1>
                </div>
            </div>
            <div className="intro">
                <div className="desc">
                    <h1>Hello : olleH</h1>

                    <p>What is esoteric? A platform for the curious minds, the ones who seek to know more about the world, the ones who are not satisfied with the mundane. </p>
                </div>
                
            </div>
        </div>
    )
}

export default WelcomePage