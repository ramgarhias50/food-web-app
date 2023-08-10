import { useState } from 'react';
import colors from './data.json';
import Rotate from './Rotate';
import { motion, useAnimation } from 'framer-motion';

function App() {
  let [intailvalue, setIntailvalue] = useState(0)
  let [angle, setAngle] = useState(0)
  const rotateAngel = `rotate(${angle}deg)`;
  const plus = () => {
    setIntailvalue(intailvalue + 1);
    setAngle(angle + 60);
    control.start({
      opacity: [0, 1],
      transition: { duration: 0.5 }
    })
  };
  const minus = () => {
    setIntailvalue(intailvalue - 1);
    setAngle(angle - 60);
    control.start({
      opacity: [0, 1],
      transition: { duration: 0.5 }
    })
  }
  const control = useAnimation();
  return (
    <div className='h-fit w-fit'>
      {/* Navbar start here */}
      <nav className='h-[27px] w-[1500px] top-[30px] left-[100px] absolute z-10 flex justify-between'>
        <div className='h-[27px] w-[135px] flex justify-around hover:cursor-pointer transition-all'>
          <svg width="31" height="23" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7224 6.50647C17.7224 10.0927 14.4888 13 10.5 13C6.51116 13 3.27755 10.0927 3.27755 6.50647C3.27755 2.92019 -7.68987 0.493941 10.5 0.0129383C28.6899 -0.227563 17.7224 2.92019 17.7224 6.50647Z" fill={colors.at(intailvalue).color} />
          </svg>
          <span className='font-[Poppins] text-[18px]'>Food Hut</span>
        </div>
        <div className='w-[289px]'>
          <ul className='list-none flex justify-around'>
            <li className='hover:cursor-pointer'>Breakfast</li>
            <li className='hover:cursor-pointer'>Lunch</li>
            <li className='hover:cursor-pointer'>Dinner</li>
          </ul>
        </div>
        <div className='hover:cursor-pointer'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </div>
      </nav>
      {/* circle start here */}
      <div>
        <div className="absolute left-[798px] top-[0px] scale-125">
          <svg width="997" height="493" viewBox="0 0 997 493" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="588" cy="-95" r="588" fill={colors.at(intailvalue).color} />
          </svg>
        </div>
        <div className="absolute right-[290px] top-[190px] transition-all ease-in duration-300 scale-1" style={{ transform: `${rotateAngel}` }}>
          < Rotate />
        </div>
        <motion.div
          animate={control}
        >
          <div className='h-[200px] w-[200px] absolute right-[441px] top-[346px] transition-all ease-in-out duration-1000'>
            <img src={require(`${colors.at(intailvalue).image}`)} alt={""} />
          </div>
        </motion.div>
      </div>
      {/* other computnents */}
      <div>
        <div className='h-[224px] w-[353px] flex flex-col justify-around absolute top-[300px] left-[120px] z-[-2] b'><span className='font-[Poppins] text-5xl font-medium' style={{ color: `${colors.at(intailvalue).color}` }}>Delicious</span>
          <span className='font-[Poppins] text-4xl'>Quench the Hunger</span>
          <p className='w-[347px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue quis posuere adipiscing id proin in ullamcorper sollicitudin. Cras vitae mollis viverra tincidunt risus, ut. Pretium.</p>
        </div>
        <div className="h-12 w-40 font-[Poppins] text-lg flex items-center justify-center rounded-full text-white absolute top-[554px] left-[120px]" style={{ backgroundColor: `${colors.at(intailvalue).color}` }}>Quench Now</div>
        <div className='w-[851px] flex justify-between absolute top-[690px] right-[90px]'>
          <button onClick={minus} className="h-[40px] w-[40px] rounded-full flex justify-center items-center" style={{ backgroundColor: `${colors.at(intailvalue).color}` }}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3137 22.6274L1.00001 11.3137M12.3137 22.6274L23.6274 11.3137M12.3137 22.6274V2.47955e-05" stroke="white" strokeWidth="2" />
            </svg>
          </button>
          <button onClick={plus} className="h-[40px] w-[40px] rounded-full flex justify-center items-center" style={{ backgroundColor: `${colors.at(intailvalue).color}` }}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3137 22.6274L1.00001 11.3137M12.3137 22.6274L23.6274 11.3137M12.3137 22.6274V2.47955e-05" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </div >
  )
}

export default App;