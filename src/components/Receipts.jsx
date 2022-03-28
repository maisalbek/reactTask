import React, { useState } from 'react';
import Ingredients from './Ingredients';

const Receipts = () => {
    const [meal, setMeal] = useState('')
    const handleChange=(e)=>{
        if(e.target.value==='Китайский суп'){
            setMeal('Китайский лук, Баранина, перец, сердце крысы')
        }else if(e.target.value==='Японский суп'){
            setMeal('Японский лук, Говядина, водоросли, рыба')
        }else if(e.target.value==='Корейский суп'){
            setMeal('Острый перец, вода, водоросли, рыба')
        }else if(e.target.value==='Узбекский суп'){
            setMeal('Рис, Картофель, перец, лук')
        }else if(e.target.value==='Кыргызский суп'){
            setMeal('Мясо, рыба, морковь, соль')
        }
    }
    return (
        <div style={{borderStyle: 'solid', width:'400px'}}>
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Китайский суп'/>
            <label htmlFor="">Китайский суп</label><br />
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Японский суп'/>
            <label htmlFor="">Японский суп</label><br />
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Корейский суп'/>
            <label htmlFor="">Корейский суп</label><br />
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Узбекский суп'/>
            <label htmlFor="">Узбекский суп</label><br />
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Кыргызский суп'/>
            <label htmlFor="">Кыргызский суп</label>
            <Ingredients meal={meal} />
        </div>
    );
};

export default Receipts;