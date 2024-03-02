import React from 'react'

const UploadPrescription = () => {
  return (
    <div>
<div class="border p-4 upload_prescription">
                            <form method="post" action="https://indimedo.com/prescription-upload" enctype="multipart/form-data" class="ng-pristine ng-valid">
                                <input type="hidden" name="_token" value="VavqDyLwm0oD6Tnzlmlw8B8RW0V38khzE3LhWLL6"/>                                <div class="form-group">
                                    <label><strong>Upload Prescription</strong></label>
                                    <p class="mb-3"><small>Please attach a prescription to proceed</small></p>
                                    <label for="document-dropzone">Choose file</label>
                                    <div class="needsclick dropzone dz-clickable" id="document-dropzone"><div class="dz-default dz-message"><span>Drop files here to upload</span></div></div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" id="continue" class="btn btn-block btn-primary" disabled="">Upload to Continue <i class="fa fa-fw fa-caret-right"></i></button>
                                </div>
                            </form>
                        </div>


    </div>
  )
}

export default UploadPrescription