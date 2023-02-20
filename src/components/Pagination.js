import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <div><nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <Link class="page-link" to="" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </Link>
      </li>
      <li class="page-item"><Link class="page-link" to="">1</Link></li>
      <li class="page-item"><Link class="page-link" to="/ahmedabad/page2">2</Link></li>
      <li class="page-item"><Link class="page-link" to="/ahmedabad/page3">3</Link></li>
      <li class="page-item">
        <Link class="page-link" to="" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </Link>
      </li>
    </ul>
  </nav></div>
  )
}

export default Pagination