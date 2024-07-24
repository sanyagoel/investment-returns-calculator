import './header.css'

export default function Header(){
    return(
        <header className='flex flex-col items-center'>
        <img className='w-36 h-auto mb-5 ' src="investment-calculator-logo.png"></img>
        <h1 className='text-customWhite font-sans font text-2xl'>Investment Calculator</h1>
        </header>
    )
}

/* 
header img{
    width: 100px;
    height: auto;
    margin-bottom: 1.2rem;
  }
  
  header h1{
    color: rgba(255, 255, 255, 0.949);
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5em;
    
  }

   */