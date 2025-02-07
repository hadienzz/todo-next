import timerIcon from '../../public/timer-icon.png'
import pinIcon from '../../public/pin-icon.png'
import priorityIcon from '../../public/priority-icon.png'
import submitIcon from '../../public/submit-icon.png'
import { useFormStatus } from 'react-dom'


const materialIcon = [
    { src: timerIcon.src, name: 'Timer' },
    { src: pinIcon.src, name: 'Pin' },
    { src: priorityIcon.src, name: 'Priority' },
]


const FooterModal = () => {
    return (
        <div className="mt-[19px] flex justify-between">

            <div className="flex gap-8">
                {materialIcon.map((icon, idx) => (
                    <img src={icon.src} key={idx} alt={icon.name} className="cursor-pointer" />
                ))}
            </div>

            <button type='submit'>
                <img src={submitIcon.src} alt={'Submit'} className="cursor-pointer" />
            </button>
            
        </div>
    )
}

export default FooterModal