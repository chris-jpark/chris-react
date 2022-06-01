import { Link } from 'react-router-dom';
import Logo from './Logo'
import './index.scss';
import { useEffect, useState } from 'react'

import AnmiatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['C', 'h', 'r', 'i', 's', ' ', 'P', 'a', 'r', 'k']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span ClassName={letterClass}>H</span>
                    <span ClassName={`${letterClass} _12`}>i,</span>
                    <br />
                    <span ClassName={`${letterClass} _13`}>I'</span>
                    <span ClassName={`${letterClass} _14`}>m </span>
                    <AnmiatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={10} />
                    <br />
                </h1>
                <h2>
                    <AnmiatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={18} />
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            <Logo />
        </div>
    );
}

export default Home