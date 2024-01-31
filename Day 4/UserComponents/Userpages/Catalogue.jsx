import Services from "./Services"
import '../Userstyles/Catalogue.css'
import item1 from '../Userasset/tech1.jpg'
import item2 from '../Userasset/tech3.jpg'
function Catalogue() {
    return (
        <>
        <div className="catalogue-page">
            <div className="title">
            <h2>Explore the Packages</h2>
            </div>
            <div className="quote">
                <p>“  Integrating new ideas and technologies into the fabric of SXSW is always something we strive to do.We were excited to work with Eventbase on this large-scale project has become such an important platform for us. ” 
                    <br/><span>--- Scott Wilcox, Chief Innovation Officer, South By Southwest</span></p>
            </div>
            <div className="catalogue-items">
                <div className="item1">
                    <div className='itemleft'>
                        <img src={item1} className='about' width={500} height={730}/>
                    </div>
                    <div className='itemright'>
                        <h1>Item1</h1>
                        <h3>Eventify is an events & experiential management company established by seasoned event professionals who have learnt.</h3>
                    </div>
                </div>
                <div className="item1">
                    <div className='itemright'>
                        <h1>Item2</h1>
                        <h3>Eventify is an events & experiential management company established by seasoned event professionals who have learnt, </h3>
                    </div>
                    <div className='itemleft'>
                        <img src={item2} className='about' width={500} height={730}/>
                    </div>
                </div>
                <div className="service-container">
                    <Services/>
                </div>
            </div>
        </div>
            <div className="item2">
                    <div className='left'>
                        <h3>Looking for <br/>More?</h3>
                        <p>Get Connected to Us</p>
                    </div>
                    <div className='right'>
                        <input type="email" placeholder="Email" />
                        <button type="submit" >Subscribe</button>
                    </div>
            </div>
        </>
    )
}

export default Catalogue