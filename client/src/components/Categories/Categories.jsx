import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src="https://i.imgur.com/eVnUOrp.jpg" alt="" />
          <button>
            <Link className="link" to="/products/2">
              Meilleur vente
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://i.imgur.com/iambjRc.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Nouveauté
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://i.imgur.com/K0zt3Tj.jpg" alt="" />
          <button>
            <Link className="link" to="/products/3">
              Précommande 
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-1">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://i.imgur.com/GHp304x.jpg" alt="" />
              <button>
                <Link className="link" to="/products/4">
                  Accessoire
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://i.imgur.com/pr0SyXb.png" alt="" />
              <button>
                <Link className="link" to="/products/6">
                  Occasion
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://i.imgur.com/qpRdSTb.jpg" alt="" />
          <button>
            <Link className="link" to="/products/5">
              Retro
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories