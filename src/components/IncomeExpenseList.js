import React from "react";
import '../css/IncomeExpenseList.css'

function IncomeExpenseList(props){
    const {items} = props;
    return(
        <div>
            <p><b>ຕາລາງລາຍລະອຽດລາຍຮັບລາຍຈ່າຍ</b></p>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>ວັນທີ່</th>
                        <th>ຫົວຂໍ້</th>
                        <th>ລາຄາກີບ</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.title}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IncomeExpenseList;