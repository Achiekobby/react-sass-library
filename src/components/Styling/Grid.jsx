import React from 'react'

const Grid = () => {
  return (
    <>
    <div className="container">
        <h2 class="font-lg mb-2">Grid System</h2>
        <div class="row gap-1 justify-center">
          <div class="col-xs-12 col-sm-5 col-xl-3">
            <div class="card bg-info text-white">
              <h3 class="card-title">Grid One</h3>
              <p class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-5 col-xl-3">
            <div class="card bg-secondary text-white">
              <h3 class="card-title">Grid Two</h3>
              <p class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-5 col-xl-3">
            <div class="card bg-primary text-white">
              <h3 class="card-title">Grid Three</h3>
              <p class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-5 col-xl-3">
            <div class="card bg-error text-white">
              <h3 class="card-title">Grid Four</h3>
              <p class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Grid