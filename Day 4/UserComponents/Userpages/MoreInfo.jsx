import { useState } from 'react';
import '../Userstyles/MoreInfo.css';
import one from '../Userasset/one.png'
import two from '../Userasset/two.png'
import three from '../Userasset/three.png'
import four from '../Userasset/four.png'
function ProductVerify() {
    const [Option, setOption] = useState('One');
    const handleOption = (option) => {
    setOption(option);
    };
return (
    <div className='pbody'>
            <center><h1>Our Highlights</h1></center>
            <div>
                <div className='info'>
                    <div className='info-contents'>
                        <div className='content' onClick={() => handleOption('One')}>
                            Networking
                        </div>
                        <div className='content' onClick={() => handleOption('Two')}>
                            Registration
                        </div>
                        <div className='content' onClick={() => handleOption('Three')}>
                            Agenda
                        </div>
                        <div className='content' onClick={() => handleOption('Four')}>
                            Attendees
                        </div>
                        <div className='content' onClick={() => handleOption('Five')}>
                            Event
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {Option && (
                    <div className='selected-content'>
                        {Option === 'One' && 
                        <div className='con1'>
                            <img src={one}  />
                        </div>
                        }
                        {Option === 'Two' &&
                        <div className='con1'>
                            <img src={two}  />
                        </div>
                        }
                        {Option === 'Three' &&
                        <div className='con1'>
                            <img src={three}  />
                        </div>
                        }
                        {Option === 'Four' &&
                        <div className='con1'>
                            <img src={four} />
                        </div>
                        }
                        {Option === 'Five' &&
                        <div className='con1'>
                            <img src={one} height={400} width={700} />
                        </div>
                        }
                    </div>
                )}
            </div>
        </div>
)
}

export default ProductVerify