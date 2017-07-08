import React from 'react';

class SearchBarDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { credDetail } = this.props;
    return(
      <div className="cred-detail">
        <div className="website-detail">
          { credDetail.website ? `website: ${credDetail.website}` : `` }
        </div>
        <div className="username-detail">
          { credDetail.username ? `username: ${credDetail.username}` : `` }
        </div>
        <div className="borrower-detail">
          { credDetail.borrower_user_id ? `borrower_user_id: ${credDetail.borrower_user_id}` : `` }
        </div>
      </div>
    );
  }

}

export default SearchBarDetail;
