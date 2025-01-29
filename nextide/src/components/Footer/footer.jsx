import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
              </p>
            </div>
            <div className="col-md-4">
              <h2>Recent Posts</h2>
              <ul>
                <li><a href="#">Post 1</a></li>
                <li><a href="#">Post 2</a></li>
                <li><a href="#">Post 3</a></li>
                <li><a href="#">Post 4</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2>Contact Us</h2>
              <p>
                123, Main Street, Your City, 123456
              </p>
            </div>
          </div>
        </div>
      </footer>
    

    </div>
  );
}
