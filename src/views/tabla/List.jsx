import "./list.scss"
import Sidebar from "../../components/navbars/Navhorizontal"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';

import { 
  Link
  
   }  from "react-router-dom";

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      <div className="datatable">
      <div className="datatableTitle">
        
 <br />      
<h1 style={{ textAlign:'center',  }}>PRODUCTORES</h1>
<hr  style={{ color: "black" }}></hr>

<div className='container mt-5'>

<div class="d-grid gap-2 d-md-flex justify-content-md-end">

<Link  type="button" className="btn btn-primary btn-left me-md-2" to="/RegisterProductor">Registrar productor</Link>

{/* <button type="button" class="btn btn-primary btn-left" >Registrar productor</button> */}
</div>


{/* <button type="button" class="btn btn-outline-primary">Registrar productor</button> */}
<br></br>
<br></br>
<br></br>

<MDBTable align='middle' bordered borderColor="info">
      <MDBTableHead  >
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>

          
            <MDBBtn color='link' rounded size='sm'>
            <button type="button" class="btn btn-outline-warning mx-3">Edit</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
            <button type="button" class="btn btn-outline-warning mx-3">Edit</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
            <button type="button" class="btn btn-outline-warning mx-3">Edit</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>


        
               </div>


      </div>
      
    </div>
        
      </div>
    </div>
  )
}

export default List