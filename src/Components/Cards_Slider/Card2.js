// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandsHelping, faWheelchair, faHome, faUserFriends, faChalkboardTeacher, faHeartbeat } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faWheelchair, faHome, faUserFriends, faChalkboardTeacher, faHeartbeat, faCar, faTasks, faLifeRing, faBroom, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

const cardData = [
  {
    icon: faHandsHelping,
    title: "Assist Access/Maintain Employ",
    description: "Supporting individuals to access and maintain employment.",
  },
  {
    icon: faHome,
    title: "Assist Prod-Pers Care/Safety",
    description: "Providing support for personal care and safety.",
  },
  {
    icon: faLifeRing,
    title: "Assist-Life Stage, Transition",
    description: "Helping with life stages and transitions.",
  },
  {
    icon: faUserFriends,
    title: "Assist-Personal Activities",
    description: "Assisting with daily personal activities.",
  },
  {
    icon: faCar,
    title: "Assist-Travel/Transport",
    description: "Support with travel and transportation needs.",
  },
  {
    icon: faTasks,
    title: "Daily Tasks/Shared Living",
    description: "Assistance with daily tasks and shared living arrangements.",
  },
  {
    icon: faPeopleArrows,
    title: "Innov Community Participation",
    description: "Innovative community participation programs.",
  },
  {
    icon: faChalkboardTeacher,
    title: "Development-Life Skills",
    description: "Workshops and training to develop life skills.",
  },
  {
    icon: faBroom,
    title: "Household Tasks",
    description: "Assistance with household tasks and chores.",
  },
  {
    icon: faUserFriends,
    title: "Participate Community",
    description: "Programs to encourage community participation.",
  },
  {
    icon: faPeopleArrows,
    title: "Group/Centre Activities",
    description: "Organized group and centre-based activities.",
  },
];
  

export default function CardsModified() {
  return (
    <div>
      <div className='flex items-center justify-center w-full pt-12 pb-4'>
        <h1 className="relative text-2xl font-extrabold text-center text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl custom-underline bg-gradient-to-br from-gray-500 via-[#0b1056] to-gray-500 bg-clip-text">
          What We Offer
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-[100%] mt-4 bg-[#0b1056]"></span>
        </h1>
      </div>

      <section id="features" className="container px-4 py-8 mx-auto space-y-6 bg-transparent bg-slate-50 md:py-12 lg:py-16">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {cardData.map((card, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-[#0b1056] p-2">
              <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
                <FontAwesomeIcon icon={card.icon} className="w-12 h-12 fill-[#0b1056]" />
                <div className="mt-2 space-y-6">
                  <h3 className="font-bold text-lg text-[#0b1056] underline underline-offset-2">{card.title}</h3>
                  <p className="text-[13px] font-semibold leading-normal text-[#0b1056]">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
