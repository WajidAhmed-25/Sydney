import './badge2.css'
import log_ from './NDIS-logo.png'

export default function Badge2(){


    return(
        <>
        

        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>

<div class="app-download">
    <label id="first-title">Registered</label>
    <img src={log_} alt='Picture' className='w-32 h-16'/>
    <label id="second-title ">Provider</label>
 
</div>  

        
        </>
    )
}