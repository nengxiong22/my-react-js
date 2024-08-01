import React, { useState, useRef } from "react";
import '../css/ExpenseForm.css';

function ExpenseForm(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const nameInputRef = useRef(null);
    
    const phone_name = (event) => {
        setName(event.target.value);
    }

    const phone_price = (event) => {
        setPrice(event.target.value);
    }

    const save = (event) => {
        event.preventDefault();

        const itemData = {
            title: name,
            amount: Number(price)
        }

        console.log(itemData);
        event.target.reset();
        nameInputRef.current.focus();
    }

    return (
        <section>
            <form onSubmit={save}>
                <div>
                    <h5><b>ຟອມປ້ອນຂໍ້ມູນ ແລະ ເກັບກຳຂໍ້ມູນລາຍຮັບລາຍຈ່າຍ</b></h5><br />
                    <div className="col-6">
                        <input 
                            type="text" 
                            placeholder="ຫົວຂໍ້" 
                            onChange={phone_name}
                            ref={nameInputRef}
                            className="form-control Small shadow" 
                            required
                        /><br />
                        <input 
                            type="number" 
                            placeholder="ລາຄາ" 
                            onChange={phone_price}
                            className="form-control Small shadow" 
                            required
                        /><br />
                    </div>
                    <button type="submit" className='btn btn-primary Small shadow'>ສົ່ງຂໍ້ມູນ</button>
                </div>
            </form>
        </section>
    )
}

export default ExpenseForm;