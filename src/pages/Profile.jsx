import React from 'react';
import './artpages/ProfilePage.css';
import { FaCrown, FaCoins } from 'react-icons/fa';

function Profile() {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Profil Pengguna</h2>
      <div className="profile-card">
        <img src="/images/profile.jpg" alt="User Profile" className="profile-image" />
        <div className="profile-info">
          <p><strong>Nama:</strong> Mychael Daniel N</p>
          <p><strong>Nim:</strong> 122140104 </p>
          <p><strong>Email:</strong> mychael.122140104@student.itera.ac.id</p>
          <p><strong>Total Tiket Dibeli:</strong> 3</p>
          <div className="profile-extra">
            <span className="coins"><FaCoins /> 120 Coin</span>
            <span className="premium"><FaCrown /> Premium Member</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
