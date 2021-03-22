import React from 'react';
import './adminUsers.css';

export default function AdminUsersComponent() {
  return (
    <section className="admin__users">
      <h2>Pares</h2>
      <div className="flex detail__admin">
        <div className="image__admin">
          <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_TxCKVU0eSrsO-CjKmKiYIjiPXEBnlJRA7nOU4ig=s64-c-mo" alt="Admin" />
        </div>
        <div className="text__admin">
          <h4>Laia Solanes</h4>
          <p>laiasolanes@gmail.com</p>
        </div>
      </div>

    </section>
  );
}
