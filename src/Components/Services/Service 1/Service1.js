import PageIntro from "../../PageIntro/PageIntro";
import './data.css'
import Service_Card from "../Root_Component/Root";

export default function Day_Option_Program(){



    return(


        <>
        
        <PageIntro page_name="Day Option Program"/>
        


<div class="flex flex-row justify-center items-center min-h-screen bg-app bg-center bg-no-repeat bg-cover">
	<main
		class="flex flex-col lg:flex-row p-2  wajid  w-[94%] backdrop-filter backdrop-blur-lg mb-4  rounded-xl overflow-hidden    mt-4 lg:mt-6">
		<div class="flex-1 p-2 lg:p-4  ">
		
			<div class="grid grid-rows-4 grid-cols-1 gap-8 md:grid-rows-2 md:grid-cols-2  place-items-center">
				
     


     <Service_Card title="Title" description="This is Wajid Ahmed"/>


     <Service_Card title="Title" description="This is Wajid Ahmed"/>

     <Service_Card title="Title" description="This is Wajid Ahmed"/>

     <Service_Card title="Title" description="This is Wajid Ahmed"/>
          




			
			</div>

		</div>
	</main>
</div>











        </>
    )
}