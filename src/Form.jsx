import { Component } from "react";
import './Form.css'
class Forms extends Component{
    render(){
        return(
            <><center>
              <form>
                <h1>Slambook</h1>
              <label for="name">Name:</label>
              <input type="text" id="name" required/><br/>
              <label for="nickname">Nickname:</label>
              <input type="text" id="nickname" required/><br/>
              <label for="dob">Date of Birth:</label>
              <input type="date" id="dob" required/><br/>
              <label for="Phone">Phone no:</label>
              <input type="text" id="Phone" required/><br/>
              <label for="Address">Address:</label> 
              <input type="text" id="Address"/><br/>
              <label type="message">Message:</label>
              <textarea id="message"rows="5" cols="30"></textarea>
             
              <label for="gender">Gender: </label>
              <label><input type="radio" name="gender" /> Male</label>
              <label><input type="radio" name="gender" /> Female</label>
             
              <label>Favourite Actor:</label>
              <input type="checkbox" id="checkbox1" value="Checkbox 1"/> Vijay
              <input type="checkbox" id="checkbox1" value="Checkbox 1"/>Surya
              <input type="checkbox" id="checkbox1" value="Checkbox 1"/>Ajith 
              <input type="checkbox" id="checkbox1" value="Checkbox 1"/>Danush <br/>
             <label for="options">School: </label>
              <select id="options">
              <option value="" disabled selected></option>
              <option value="Option 1">Shri Swamy</option>
              <option value="Option 2">Modern Academy</option>
              <option value="Option 3">Little angels</option>
              </select><br/>
               <button type="submit">Submit</button>

              
              </form>
              </center>
            </>
        )
    }
}
export default Forms;