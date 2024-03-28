import React, { useState, useEffect } from 'react';

function Insert() {
    return (
        <div className='Form1'>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">New Sports Name</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Insert