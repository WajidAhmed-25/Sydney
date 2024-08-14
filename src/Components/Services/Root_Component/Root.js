import './root.css';

export default function Service_Card(props){




    return(
        <>
        


                
        <div
					class="rounded-3xl w-[80%] khan shadow-lg transition-all cursor-pointer duration-700 hover:scale-110  backdrop-filter h-[530px] backdrop-blur-lg  p-4 flex flex-col relative undefined">

                        <div className="w-full h-[170px]  ">

<img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Lamborghini_Veneno,_Car_Zero_(profile).jpg" className="w-[55%] ml-auto h-full mr-auto rounded-xl"/>

                        </div>
                        
					<div class="text-white absolute right-2 mt-[200px] ">
						<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
							</path>
						</svg>
					</div>
					<div class="text-white text-xl font-bold underline underline-offset-8 mb-2 mt-12 text-center">{props.title}</div>
					<div class="text-white font-normal">{props.description}</div>
				</div>
        
        
        
        
        </>
    )
}