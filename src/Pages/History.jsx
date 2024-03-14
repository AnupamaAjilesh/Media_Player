import React, { useEffect, useState } from 'react'
import { getHistory } from '../../Services/allApis'
import { deleteHistory } from '../../Services/allApis'
import { toast } from 'react-toastify'


function History() {
  const [history, setHistory] = useState([])
  const [delStatus, setDelStatus] = useState({})
  useEffect(() => {
    getData()
  }, [ delStatus])

  const getData = async () => {
    const res = await getHistory()
    console.log(res.data)
    setHistory(res.data)
  }
  const handleDelete = async (id) => {
    console.log(id)
    const res = await deleteHistory(id)
    setDelStatus(res)
  }


  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        <table className="table table-bordered">
          <tr>
            <th>Caption</th>
            <th>url</th>
            <th>Date & Time</th>
          </tr>
          {
            history?
            history.map(item=>(
              <tr>
                <td>{item.caption}</td>
                <td>{item.url}</td>
                <td>{item.datetime}</td>
                <td><i class="fa-solid fa-trash" onClick={()=>handleDelete(item.id)}></i></td>
              </tr>

            ))
            :
            <h3>no history</h3>
          }

        </table>

      </div>

    </>
  )
}

export default History