import React from 'react'
export default function Downloads(){
    return(
        <div className="row pt-3">
            <div className="col-md-3"></div>
            <div className="col-md-6 btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary">Images</button>
                    <button type="button" class="btn btn-outline-primary">Videos</button>
                    <button type="button" class="btn btn-outline-primary">Audios</button>
                    <button type="button" class="btn btn-outline-primary">Files</button>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}