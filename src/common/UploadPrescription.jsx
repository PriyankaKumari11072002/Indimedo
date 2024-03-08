

import React, { useState } from 'react';
import ContactForPrescription from './ContactForPrescription';

const UploadPrescription = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [uploadContinue, setuploadContinue] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setButtonDisabled(false);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setButtonDisabled(true);
  };

  return (
    <>
    {!uploadContinue&&(<div style={{ textAlign: 'center' }}>
    <h1>Upload Prescription
</h1> 
<p>Please attach a prescription to proceed</p>
 {selectedFile ? (
   <div>
     <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
     <button onClick={handleRemove}>Remove</button>
   </div>
 ) : (
   <div>
{/* <input type="file" id="upload" accept="image/*,.doc,.docx,.pdf"  hidden/>     */}
     <input type="file" accept="image/*"  id="upload"onChange={handleFileChange} hidden/>
     <label htmlFor='upload'>Drop files here to upload</label>
   </div>
 )}
 <button disabled={buttonDisabled}  onClick={()=>setuploadContinue(true)}>Upload to continue</button>
</div>)}
 {uploadContinue&&<div><ContactForPrescription/></div>}
</>

  );
};

export default UploadPrescription;





