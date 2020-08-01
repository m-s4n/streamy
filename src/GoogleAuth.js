import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./redux/actions";

const GoogleAuth = ({signIn, signOut, ...props}) => {
    

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "847824885039-gapfkf9ar5r8qpnbtbgmp96kphrrrlvq.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // Sisteye girildiğinde oturum açıp açmadığını kontrol ediyoruz.
          //setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
        });
    }); // OAuth için
  }, []);

  const onAuthChange = (isSignedIn) => {
      //console.log('ne kadar çağrıldı');
    //setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get()); // Bu sayfayı yenileme değiştirmesi için
    if(isSignedIn){
        signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
    }else{
        signOut();
    }
  };
  const renderAuthButton = () => {
    if (props.isSignedIn === null) {
      return null;
    } else if (props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <div className="ui red google button" onClick={onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </div>
      );
    }
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn:state.auth.isSignedIn,
  };
};

const mapDispatchToProps = {
  signIn,
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
