import './badge2.css'
import log_ from './NDIS-logo.png'

export default function Badge2(){


    return(
        <>
        

{/* <div class="app-download flex ">
    <label id="first-title">Provider</label>
    <img src={log_} alt='Picture' className='w-32 h-16 picture'/>
    <label id="second-title">Registered</label>
 
</div>   */}

<div className="app-download">
            <label id="second-title" className="order-1">Registered</label>
            <img src={log_} alt='Picture' className='order-2 picture'/>
            <label id="first-title" className="order-3">Provider</label>
        </div>

        
        </>
    )
}