import React, { useEffect, useState } from 'react'
import instance from '../API/api'

function PetsWeHave() {
    const [data, setData] = useState([])
    let fetchData = async (variant) => {
        let resData = await instance.get(`/portal/readpets/${variant}`);
        if (resData.status === 200) {
            setData(resData.data)
        }
    }
    useEffect(() => {
        fetchData('dog');
    }, [])



    return (
        <div className='row'>
            <h2>What all pets do we have ?</h2>
            <div className='col m-2'>
                <button onClick={() => fetchData('dog')} className='btn btn-light border-right'>DOGS</button>
                <button onClick={() => fetchData('cat')} className='btn btn-light border-0'>CATS</button>
            </div>
            <div className='m-2'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Age (Months)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((e) => {
                                return (
                                    <tr key={e._id}>
                                        <td >{e.ownerfullname}</td>
                                        <td>{e.inputBreed}</td>
                                        <td>{e.age}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PetsWeHave