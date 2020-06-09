import React from 'react'
import {Jumbotron as jumbo, Container, Col, Image, Table} from 'react-bootstrap'


export const StepTable = ()=>(

    <div>

      <h1> Set Your Sponsorship Tiers</h1>
        <p>Set your sponsorship levels & value below! Successfully sponsored organization have four tiers like below to maximize contributions. Please
          customize your own group’s sponsorship options and fill in the description of what you are providing each sponsor (see example descriptions at
          bottom for ideas!).
        </p>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Tier Name (Levels)</th>
      <th>Active</th>
      <th>Description (see examples below)</th>
    <th>  Sponsor $ Amount</th>
    <th>Slots Available</th>
    <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>5555</td>
     
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>34334</td>
    
    </tr>
    <tr>
      <td>3</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>3434</td>
    </tr>

    <tr>
      <td>4</td>
      <td>@Mark</td>
      <td>@Marky</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>787878</td>
    </tr>
   
  </tbody>
</Table>
<p>Here are some examples of sponsorship tiers
</p>
<br />
<p>As the exclusive Diamond sponsor, your business will get its logo on team jerseys as well as a full page ad in our spring tournament booklet which
is viewed by 5000 participants. Also, we will send out an email about your company (including a coupon or other time-sensitive offer) to our entire
membership database 2x per year (your choice). Your logo will be placed prominently on our website so that every family in our township will
know of your generosity in supporting our local travel club.
</p>
<br /><br/>

    </div>





)

