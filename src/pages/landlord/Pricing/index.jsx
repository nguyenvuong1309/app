import React from "react";
import MostPopularImg from "../../../assets/images/most-popular.png";
import "./style.scss";

const CheckCircleIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </svg>
  );
};

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1>Everything you need to professionally manage your rental</h1>
      <table className="pricing" cellSpacing="0">
        <thead>
          <tr>
            <th width="34%"></th>
            <th width="22%">
              <p className="pricing__type">STANDARD</p>
              <p className="pricing__price">$15/month</p>
            </th>
            <th width="22%">
              <p className="pricing__type">PRO</p>
              <p className="pricing__price">$20/month</p>
            </th>
            <th width="22%" className="most-popular">
              <p className="pricing__type">PREMIUM</p>
              <p className="pricing__price">$25/month</p>
              <img src={MostPopularImg} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="pricing__title">
            <td>Rental Advertising</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="pricing__item">
            <td>Property Listings</td>
            <td>Up to 2</td>
            <td>Up to 5</td>
            <td>Unlimited & Featured</td>
          </tr>
          <tr className="pricing__title">
            <td>Application & Screening</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="pricing__item">
            <td>Viewing Appointments</td>
            <td>
              <CheckCircleIcon />
            </td>
            <td>
              <CheckCircleIcon />
            </td>
            <td>
              <CheckCircleIcon />
            </td>
          </tr>
          <tr className="pricing__item">
            <td>Online Rental Applications</td>
            <td>
              <CheckCircleIcon />
            </td>
            <td>
              <CheckCircleIcon />
            </td>
            <td>
              <CheckCircleIcon />
            </td>
          </tr>
          <tr className="pricing__title">
            <td>Landlord Toolbox</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="pricing__item">
            <td>Landlord Form Pack</td>
            <td></td>
            <td></td>
            <td>
              <CheckCircleIcon />
            </td>
          </tr>
          <tr className="pricing__item">
            <td>Maintenance Request</td>
            <td></td>
            <td></td>
            <td>
              <CheckCircleIcon />
            </td>
          </tr>
          <tr className="pricing__item">
            <td>Landlord’s “My Profile”</td>
            <td>
              <CheckCircleIcon />
            </td>
            <td>
              <CheckCircleIcon />
            </td>
            <td>
              <CheckCircleIcon />
            </td>
          </tr>
          <tr className="pricing__item">
            <td></td>
            <td>
              <a href="/">Get Started</a>
            </td>
            <td>
              <a href="/">Get Started</a>
            </td>
            <td>
              <a href="/">Get Started</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
