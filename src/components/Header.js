import { useEffect } from 'react';
import LOGO from '../assets/logo.png';
import USER_AVATAR from '../assets/user-avatar.jpg';
import { useSelector } from 'react-redux';
import { useNavigate , useLocation} from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser ,removeUser } from '../utils/userSlicer';
import { useDispatch } from 'react-redux';


const Header = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store)=>store.user);
  const navigate = useNavigate();
  const isBrowsePage = location.pathname === "/browse";


  const handleSignout = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  // controlling routing of signed in user / new user 

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid , email , displayName } = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName
        }));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/") ;
      }
    });

    // unsubscribes when the component unmounts
    return () => unsubscribe ();
  },[])

  return (
    <div className={`relative flex justify-between items-center px-10 ${isBrowsePage ? "bg-gradient-to-b from-black to-gray-700" : ""}`}>
        <img src={LOGO} alt="logo" className='h-[148px] w-[200px] ms-10 cursor-pointer'/>

        {/* logout button */}
        { user &&
          <div className='flex items-center'>
          <img src={USER_AVATAR} alt='avatar' className='size-7 mr-2 hover:scale-105 transition duration-150 cursor-pointer' />
          <span className='font-bold text-lg text-red-600 hover:scale-105 transition duration-150 cursor-pointer'>{user.displayName} ,</span>
          <button className='font-semibold hover:underline hover:scale-105 transition duration-150 px-2 text-lg text-white' onClick={handleSignout}>Logout</button>
          </div>
        }
    </div>
  )
}

export default Header;