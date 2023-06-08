import React from 'react';
import './labs.css';
function Labs(){
    return(
        <div className='main'>
            <div className='navbar'>
                <h2 className='logo'>LifeBird</h2>
                <h2 className='home'>Home</h2>
                <h2 className='doctor'>Doctors</h2>
                <h2 className='lab'>Labs</h2>
                <h2 className='medicine'>Medicines</h2>
                <h2 className='signup'>Signup</h2> 
            </div>
    
        <div className='first-lab'>
           <img className="first-image"src="/resources/lab1.webp"></img>
        
            <div className='first-text'>
                <h1>Tests and Services: </h1>
                <p class="lab1details">Hospital labs offer a wide range of diagnostic tests and services, including but not limited to:

                    Hematology: Testing for blood disorders, cell counts, and coagulation studies.
                    Clinical Chemistry: Analyzing blood and urine samples for glucose, electrolytes, cholesterol, liver and kidney function markers, and other chemical components.
                    Microbiology: Identifying and characterizing microorganisms (bacteria, viruses, fungi) causing infections and performing antibiotic susceptibility testing.
                    Immunology: Assessing the immune system response, including tests for antibodies, autoimmune disorders, and allergies.
P                   athology: Examining tissues and cells to diagnose diseases, such as biopsies and cytology studies.
                    Molecular Diagnostics: Using advanced techniques to detect genetic and molecular abnormalities, including DNA and RNA analysis.
                    Cytogenetics: Studying chromosomes for genetic disorders and abnormalities.
                    Histocompatibility: Testing for organ and tissue compatibility in transplantation cases.
                    Toxicology: Analyzing substances, drugs, and toxins in body fluids for diagnostic and forensic purposes.</p>
                    <button class="learn">Laern More</button>
        </div>

    </div>
    </div>
    )
}
export default Labs;