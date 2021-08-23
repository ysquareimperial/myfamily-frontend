import React from 'react'
import imge1 from './yasir.jpeg'
export default function MediaImages() {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    src={{imge1}}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                />

                <img
                    src={{imge1}}     
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                />
            </div>
        </div>
    )
}