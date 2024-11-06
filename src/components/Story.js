import chefs from '../images/marioandadrian.jpg'
import './Story.css'


const Story = () => {
    return (
        <section className='container grid our-story'>
            <div className='our-story-description'>
                <h2>Little Lemon</h2>
                <h1>Chicago</h1>
                <p>
                    Little Lemon was founded by brother Mario and Adrian ten years ago. They always 
                    want to bring tasteful new recipes with best ingredients to fellow customers. Book and
                    a table and come to taste for yourself!
                </p>
            </div>
            <div className='our-story-chefs'>
                <img src={chefs} alt='story-chefs'/>
            </div>
        </section>
    )

    
}

export default Story