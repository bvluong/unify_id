import React from 'react';

class SearchBarDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { credDetail } = this.props;
    return(
      <div className="cred-detail">
        <div className="login-info">
          <h3>Login Info</h3>
          <div className="website-detail">
            <h5>{ credDetail.website ? `website: ${credDetail.website}` : `` } </h5>
            <h5>{ credDetail.username ? `username: ${credDetail.username}` : `` } </h5>
            <h5>{ credDetail.password_id ? `password: ${"*".repeat(credDetail.password_id.length)}` : `` } </h5>
            <h5>{ credDetail.borrower_user_id ? `borrower_user_id: ${credDetail.borrower_user_id}` : `` }</h5>
          </div>
        </div>
      </div>
    );
  }

}

export default SearchBarDetail;
