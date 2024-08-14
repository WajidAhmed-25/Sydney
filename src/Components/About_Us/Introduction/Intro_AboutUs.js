export default function IntroAboutUs() {

    return (
        <>
            <section class="bg-white">
                <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
                        <div class="max-w-lg ">
                            <h2 class="text-3xl font-extrabold text-center text-[#0b1056] sm:text-5xl underline underline-offset-8 max-lg:mt-3 max-md:mt-2 ">Who We Are</h2>
                            <p class="mt-8 text-gray-600 text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>

                        </div>
                        <div class="mt-12 md:mt-10">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us" class="object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}