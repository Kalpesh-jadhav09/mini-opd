import React from 'react'
export default function OPD() {
  return (
    <>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Hospital Name</th>
            <th>Address</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Poona Hospital</td>
            <td>Shivam, 27, Shivram Matre Rd, Nr. Alka Talkies, Pune, Maharashtra 411030</td>
            <td>020 4015 1000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Deenanath Mangeshkar Hospital</td>
            <td>Ganjwe Wadi, Sadashiv Peth, Pune</td>
            <td>020 4015 1000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jehangir Hospital</td>
            <td>Sasoon Rd, Opposite Railway Station, Pune</td>
            <td>020 4015 1000</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
