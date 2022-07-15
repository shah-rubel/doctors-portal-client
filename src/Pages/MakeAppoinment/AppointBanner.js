
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { format } from 'date-fns';

const AppointBanner = ({date,setDate}) => {
    
    
    return (
        <div style={{
            marginTop: "-5%",
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen mx-12 -mb-28">
            <div className="hero-content flex-col lg:flex-row-reverse -mt-60 mr-28">
                <img style={{ width: '594px', height: '355px' }} src={chair} alt="chair images" />
                
                <div style={{ width: '655px', height: '266px' }} className=' ml-52 -mt-44'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                       
                    ></DayPicker>
                     <p>You picked {format(date, 'PP')}.</p>
                </div>
            </div>
            
            <div>

            </div>
        </div>
    );
};

export default AppointBanner;