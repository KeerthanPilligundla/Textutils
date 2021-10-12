import React from 'react'

function About (props) {

    let myStyle ={
        color : props.mode==='dark'?'white':'black',
        backgroundColor : props.mode==='dark'?'#3a3b3c':'white',
    }
    return (
        <div className="container" style={myStyle}  >  
            <h2 className="my-2" >About us</h2>
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong> Analyze your text </strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    Textutils give you a way to analyze your text quick and efficently. Be it a word count or character count 
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong> Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils report the number of words and characters. Thus it is suitable for writing text with word/ chracter limit
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Browser Compatabie </strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blogs, books, excel documents, pdf documents, essays etc.
                </div>
                </div>
            </div>
            </div>
        </div>

  
    )
}

export default About 
