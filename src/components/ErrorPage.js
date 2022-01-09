import React from 'react'
import Headline from "./Headline";
import BackToHomeButton from "./BackToHomeButton";

function ErrorPage() {
    return (
        <div>
            <Headline text="Oj, något som verkat gått fel"/>  <BackToHomeButton/> 
        </div>
    )
}

export default ErrorPage
