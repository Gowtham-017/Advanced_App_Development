import '../styles/About.css'
import about from '../asset/about.png'
import { useState } from 'react';
function About() {
    const faqData = [
        { question: 'Our Experience?', answer: 'Blaaa Blaaa Blaaa' },
        { question: 'Our Uniqueness?', answer: 'Blaaa Blaaa Blaaa' },
        { question: 'Our Commitments?', answer: 'Blaaa Blaaa Blaaa' },
        // Add more FAQ items as needed
        ];
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAnswer = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className="about-page">
            <div className='about-left'>
            <img src={about} className='about' width={500}/>
            </div>
            <div className='about-right'>
                <h1>About Us</h1>
                <h3>
                Eventify is an events & experiential management company established by seasoned event professionals who have learnt, grown and made their mark in the region. The team has designed, developed and delivered the UAEs most iconic, award winning <br/> and prestigious events IPs & festivals that have captivated audiences for over a decade.
                </h3>
                <div className="faq-container">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                        <div className={`faq-question ${openIndex === index ? 'open' : ''}`} onClick={() => toggleAnswer(index)}>
                            {faq.question}
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About