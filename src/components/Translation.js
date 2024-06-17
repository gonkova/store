'use client';
import React, {useState} from 'react'
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function Translation() {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        console.log(`Selected language: ${event.target.value}`);
    };

    return (
        <div className='flex flex-row'>
          <LiaFlagUsaSolid className='text-3xl text-red'/>
            <select  value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">English</option>
                <option value="English">English</option>
                <option value="Bulgarian">Български</option>
            </select>
        </div>
    );
}
